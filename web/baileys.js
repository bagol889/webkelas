// baileys.js
import { supabase } from './whiskeysocket.js';

async function verifyKey(userKey, phoneNumber, password) {
  try {
    const response = await fetch('https://rxtwjeencinjzsjacwci.supabase.co/functions/v1/verify-key', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // GANTI DENGAN KUNCI ANON (PUBLIC) SUPABASE ANDA
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dHdqZWVuY2luanpzamFjd2NpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIwNDM2OTgsImV4cCI6MjA2NzYxOTY5OH0.O03WutWB0sHCH7m2x-HA9QQ0pwdh57nsliilsZ3xqCw' 
      },
      body: JSON.stringify({
        key: userKey,
        phone_number: phoneNumber,
        password: password
      })
    });

    const result = await response.json();
    
    if (result.success) {
      console.log('✅ Kunci berhasil diverifikasi!');
      console.log('Tipe Kunci:', result.data.key_type);
      console.log('Nomor Telepon:', result.data.phone_number);
      return true;
    } else {
      console.log('❌ Verifikasi gagal:', result.message);
      return false;
    }
  } catch (error) {
    console.error('Error saat memverifikasi kunci:', error);
    return false;
  }
}

export { verifyKey };
