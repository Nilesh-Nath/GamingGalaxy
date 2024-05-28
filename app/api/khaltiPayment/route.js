import axios from 'axios';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { amount } = reqBody;

    // Generate Khalti token
    const config = {
      public_key: 'test_public_key_4253351c2a8e4673bf0fead8eeec96f8',
      amount: amount * 100, // Convert subtotal to paisa (Khali expects amount in paisa)
    };

    const { data: { token } } = await axios.post('https://khalti.com/api/v2/payment/initialize/', config);

    // Return token to frontend
    return NextResponse.json({ token }, { status: 200 });
  } catch (error) {
    console.error('Error processing payment:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
