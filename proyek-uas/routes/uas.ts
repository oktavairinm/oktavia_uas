import { Request, Response } from "express";

interface InputPeserta {
  nim: string;
  nama: string;
  kehadiran: number;
  tugas: number;
  ujian: number;
}

export async function POST(req: Request, res: Response): Promise<void> {
  try {
    const data: InputPeserta[] = req.body;

    const hasil = data.map((peserta) => {
      const skor_akhir =
        0.2 * peserta.kehadiran + 0.3 * peserta.tugas + 0.5 * peserta.ujian;

      const status = skor_akhir >= 60 ? "Lulus" : "Tidak Lulus";

      return {
        ...peserta,
        skor_akhir,
        status,
      };
    });

    res.status(200).json(hasil);
  } catch (err) {
    res.status(500).json({ error: "Terjadi kesalahan saat memproses data." });
  }
}