import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    throw new Error("Sentry test error from App Router");
  } catch (err) {
    Sentry.captureException(err);
    return NextResponse.json(
      { message: 'Error captured by Sentry', error: err instanceof Error ? err.message : err },
      { status: 500 }
    );
  }
}