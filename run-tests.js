import { readdir } from 'fs/promises';
import { join } from 'path';
import { spawn } from 'child_process';

async function runTests() {
    const testDir = './__tests__'
    const files = await readdir(testDir)

    for (const file of files) {
        console.log(`runing ${file}...`);
        await new Promise((resolve, reject) => {
            const child = spawn('node', [join(testDir, file)], {stdio: 'inherit'})
            child.on('close', (code) => {
                if (code !== 0) {
                    reject(new Error(`test ${file} failed with code ${code}`))
                } else {
                    resolve()
                }
            })
        })
    }

    console.log('tests done');
}

runTests().catch(err => {
    console.error(err)
    procces.exit(1)
})