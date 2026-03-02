import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json(
        { error: 'Nenhum arquivo foi enviado' },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Criar nome único para o arquivo
    const timestamp = Date.now();
    const filename = `upload-${timestamp}-${file.name}`;
    const filepath = join(process.cwd(), 'public', 'uploads', filename);

    // Criar diretório se não existir
    try {
      await mkdir(join(process.cwd(), 'public', 'uploads'), { recursive: true });
    } catch (error) {
      // Diretório já existe
    }

    await writeFile(filepath, buffer);

    const url = `/uploads/${filename}`;
    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error('Erro ao fazer upload:', error);
    return NextResponse.json(
      { error: 'Erro ao fazer upload do arquivo' },
      { status: 500 }
    );
  }
}
