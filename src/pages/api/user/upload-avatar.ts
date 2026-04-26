import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const uploadDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    maxFileSize: 2 * 1024 * 1024,
  });

  try {
    const [fields, files] = await form.parse(req);
    const file = Array.isArray(files.file) ? files.file[0] : files.file;

    if (!file) {
      return res.status(400).json({ message: 'Arquivo ausente' });
    }

    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if (file.mimetype && !allowedTypes.includes(file.mimetype)) {
      if (fs.existsSync(file.filepath)) {
        fs.unlinkSync(file.filepath);
      }
      return res.status(400).json({ message: 'Formato inválido. Use JPG, JPEG ou PNG.' });
    }

    const fileName = path.basename(file.filepath);
    const url = `/uploads/${fileName}`;

    return res.status(200).json({
      url,
      message: "Upload realizado com sucesso"
    });

  } catch (error: any) {
    if (error.message && error.message.includes('maxFileSize exceeded')) {
      return res.status(400).json({ message: 'Tamanho máximo de 2MB excedido.' });
    }
    console.error("Erro no upload:", error);
    return res.status(500).json({ message: 'Falha no upload' });
  }
}