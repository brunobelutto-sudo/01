import { writeFile, readFile } from 'fs/promises';
import { join } from 'path';
import { NextRequest, NextResponse } from 'next/server';

const CONFIG_PATH = join(process.cwd(), 'public', 'config.json');

async function readConfig() {
  try {
    const data = await readFile(CONFIG_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler config:', error);
    return null;
  }
}

async function writeConfig(data: any) {
  try {
    await writeFile(CONFIG_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Erro ao salvar config:', error);
    return false;
  }
}

export async function GET() {
  const config = await readConfig();
  if (!config) {
    return NextResponse.json({ error: 'Config não encontrada' }, { status: 404 });
  }
  return NextResponse.json(config);
}

export async function POST(request: NextRequest) {
  try {
    const { section, data } = await request.json();

    if (!section || !data) {
      return NextResponse.json(
        { error: 'Section e data são obrigatórios' },
        { status: 400 }
      );
    }

    const config = await readConfig();
    if (!config) {
      return NextResponse.json({ error: 'Config não encontrada' }, { status: 404 });
    }

    config[section] = data;
    const success = await writeConfig(config);

    if (!success) {
      return NextResponse.json(
        { error: 'Erro ao salvar configuração' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data: config[section] });
  } catch (error) {
    console.error('Erro:', error);
    return NextResponse.json(
      { error: 'Erro ao processar requisição' },
      { status: 500 }
    );
  }
}
