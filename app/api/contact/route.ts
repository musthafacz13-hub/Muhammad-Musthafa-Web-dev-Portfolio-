import { NextRequest, NextResponse } from 'next/server';

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScd8DWsq8W5Tu4cdGAg5Xsfjmsyi_edPXgccElu6ma_2hI4iQ/formResponse';

const GOOGLE_FORM_ENTRIES = {
  name: 'entry.664301030',
  email: 'entry.1579103591',
  subject: 'entry.2146861121',
  message: 'entry.188150105',
};

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    console.log('[Contact API] Received submission payload:', {
      name: name ? `${name.substring(0, 10)}...` : null,
      email,
      subject,
      messageLength: message?.length,
    });

    // Server-side validation
    if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
      console.warn('[Contact API] Validation failed: missing required fields');
      return NextResponse.json(
        { success: false, error: 'All fields are required.' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      console.warn('[Contact API] Validation failed: invalid email format', email);
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Prepare x-www-form-urlencoded body for Google Forms endpoint
    const formParams = new URLSearchParams();
    formParams.append(GOOGLE_FORM_ENTRIES.name, name.trim());
    formParams.append(GOOGLE_FORM_ENTRIES.email, email.trim());
    formParams.append(GOOGLE_FORM_ENTRIES.subject, subject.trim());
    formParams.append(GOOGLE_FORM_ENTRIES.message, message.trim());

    console.log('[Contact API] Forwarding payload to Google Forms formResponse endpoint...');

    // Execute server-side fetch request
    const response = await fetch(GOOGLE_FORM_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      body: formParams.toString(),
    });

    console.log('[Contact API] Google Forms HTTP Response status:', response.status, response.statusText);

    // Google Forms returns 200 or 302/303 redirect on successful submission
    if (response.ok || response.status < 400) {
      console.log('[Contact API] Successfully submitted to Google Forms!');
      return NextResponse.json({
        success: true,
        message: 'Message sent successfully',
      });
    }

    const responseText = await response.text();
    console.error('[Contact API] Google Forms returned non-success response:', {
      status: response.status,
      statusText: response.statusText,
      preview: responseText.substring(0, 300),
    });

    return NextResponse.json(
      {
        success: false,
        error: `Google Forms submission error (Status ${response.status})`,
      },
      { status: 502 }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    console.error('[Contact API] Server proxy exception:', errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process contact submission on server.',
        details: errorMessage,
      },
      { status: 500 }
    );
  }
}
