import React, { useState, useEffect } from 'react';
import { UserCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../supabaseClient'; // Import koneksi supabase

// Definisikan tipe data pesan
interface Message {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

const Guestbook = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false); // Untuk status loading saat kirim
  const [fetching, setFetching] = useState(true); // Untuk status loading saat ambil data

  // FUNGSI 1: Ambil data dari Supabase saat halaman dibuka
  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      // Select semua kolom, urutkan dari yang terbaru (descending)
      const { data, error } = await supabase
        .from('guestbook')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      if (data) setMessages(data);
    } catch (error) {
      console.error("Error mengambil pesan:", error);
    } finally {
      setFetching(false);
    }
  };

  // FUNGSI 2: Kirim pesan ke Supabase
  const handleSubmit = async () => {
    if (!name || !text) return;

    setLoading(true);

    try {
      // Insert ke tabel guestbook
      const { error } = await supabase
        .from('guestbook')
        .insert([{ name: name, message: text }]);

      if (error) throw error;

      // Jika sukses, kosongkan form dan ambil ulang data terbaru
      setName("");
      setText("");
      fetchMessages(); 
    } catch (error) {
      alert("Gagal mengirim pesan!");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  // Helper untuk format tanggal (misal: 2023-12-01 jadi 1 Des 2023)
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div className="min-h-screen bg-[#020617] pt-24 pb-12 px-4 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-white mb-2">Guestbook</h2>
      <div className="w-12 h-1 bg-red-600 rounded-full mb-12"></div>

      {/* FORM INPUT PESAN */}
      <div className="max-w-2xl w-full bg-[#111827]/50 backdrop-blur-md border border-white/5 rounded-3xl p-6 md:p-8 shadow-2xl mb-12">
        <h3 className="text-xl font-bold text-white mb-6">Tulis Pesan</h3>
        <div className="space-y-4 mb-6">
          <input 
            type="text" 
            placeholder="Nama Anda" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={loading}
            className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors disabled:opacity-50"
          />
          <textarea 
            placeholder="Pesan atau harapan untuk masa depan..." 
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            disabled={loading}
            className="w-full bg-[#020617] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none disabled:opacity-50"
          ></textarea>
        </div>
        <button 
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-red-900/20 flex justify-center items-center gap-2 disabled:bg-red-900"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Mengirim...
            </>
          ) : (
            "KIRIM PESAN"
          )}
        </button>

        <div className="mt-8 bg-black/20 rounded-xl p-4 border-l-4 border-blue-500">
          <div className="flex items-center gap-2 mb-1">
             <span className="bg-blue-500/20 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase">Pinned</span>
             <p className="text-white font-bold text-sm">Wali Kelas</p>
          </div>
          <p className="text-slate-300 text-sm">Jangan pernah lupakan sekolah ini, pintu selalu terbuka buat kalian!</p>
        </div>
      </div>

      {/* DAFTAR PESAN DARI SUPABASE */}
      <div className="max-w-2xl w-full space-y-4">
        <h3 className="text-xl font-bold text-white mb-4 px-2">
          {fetching ? "Memuat Pesan..." : `Pesan Terbaru (${messages.length})`}
        </h3>
        
        {fetching ? (
          <div className="flex justify-center py-10">
            <Loader2 className="w-8 h-8 text-red-600 animate-spin" />
          </div>
        ) : (
          messages.length === 0 ? (
            <p className="text-slate-500 text-center italic">Belum ada pesan. Jadilah yang pertama menulis!</p>
          ) : (
            messages.map((msg) => (
              <div key={msg.id} className="bg-[#111827]/30 border border-white/5 rounded-2xl p-5 flex gap-4 hover:bg-[#111827]/50 transition-colors">
                <div className="shrink-0">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center text-slate-400">
                    <UserCircle2 className="w-6 h-6" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="text-white font-bold text-sm md:text-base">{msg.name}</h4>
                    <span className="text-[10px] text-slate-500 uppercase tracking-wide">{formatDate(msg.created_at)}</span>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">"{msg.message}"</p>
                </div>
              </div>
            ))
          )
        )}
      </div>

    </div>
  );
};
export default Guestbook;

