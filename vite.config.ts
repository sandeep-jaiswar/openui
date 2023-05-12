import react from '@vitejs/plugin-react';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { defineConfig, UserConfigExport } from 'vite';
import dts from 'vite-plugin-dts';

const App = async (): Promise<UserConfigExport> => {

    let name = 'openui';

    const data: string = await readFile(path.join(__dirname, 'src','main.tsx'), { encoding: 'utf-8' })

    const s = data.split('\n')

    for (const x of s.reverse()) if (x.includes('export default')) name = x.replace('export default ', '').replace(" ", "")

    return defineConfig({
        plugins: [
            react(),
            dts({
                insertTypesEntry: true,
            }),
        ],
        build: {
            lib: {
                entry: path.resolve(__dirname, 'src/main.tsx'),
                name,
                formats: ['es', 'umd'],
                fileName: (format) => `openui.${format}.js`,
            },
            rollupOptions: {
                external: ['react', 'react-dom'],
                output: {
                    globals: {
                        react: 'React',
                        'react-dom': 'ReactDOM',
                    },
                },
            },
        },
    });
}

export default App 