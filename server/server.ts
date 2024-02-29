import { App } from "./index";




function extractValues(input: string): { entry: number, targets: number[] } | null {
    // Tìm vị trí của chuỗi "ENTRY :"
    const entryIndex = input.indexOf("ENTRY");
    if (entryIndex === -1) return null; // Không tìm thấy chuỗi "ENTRY :"

    // Tìm vị trí bắt đầu của chuỗi "ENTRY :" và tính toán vị trí kết thúc
    const entryStart = entryIndex + "ENTRY".length;
    const entryEnd = input.indexOf("\n", entryStart);

    // Lấy chuỗi "ENTRY :" và chuyển đổi thành số
    const entryValue = parseFloat(input.substring(entryStart, entryEnd).trim());

    // Tìm vị trí bắt đầu của chuỗi "Target 1:" và lấy giá trị các target
    const targets: number[] = [];
    for (let i = 1; i <= 6; i++) {
        const targetString = `Target ${i}:`;
        const targetIndex = input.indexOf(targetString);
        if (targetIndex === -1) return null; // Không tìm thấy chuỗi target
        const targetStart = targetIndex + targetString.length;
        const targetEnd = input.indexOf("\n", targetStart);
        const targetValue = parseFloat(input.substring(targetStart, targetEnd).trim());
        targets.push(targetValue);
    }

    return { entry: entryValue, targets };
}

// Test với đoạn chuỗi đầu vào
const input = `📦 #CELO/USDT - Small Size
🔦 Bearish IDEA 🐻

🪤 Max leverage recommended: 10X - 20X

✓ ENTRY  : - 0.764 - 0.788

💵 Target 1: 0.753
💵 Target 2: 0.733
💵 Target 3: 0.711
💵 Target 4: 0.686
💵 Target 5: 0.649
💵 Target 6: 0.611

🪄 Stop | Loss : 0.803`;

const result = extractValues(input);



function extractValues2(input: string): { entry: number[], targets: number[], slValue: number } | null {
    // Sử dụng regular expression để tìm giá trị "ENTRY :" và các target
    const entryRegex = /ENTRY\s*:\s*(.*)/;
    const slRegex = /Loss\s*:\s*(.*)/;
    const targetRegex = /Target\s*(\d+)\s*:\s*([+-]?\d*\.?\d+)/g;

    const entryMatch = input.match(entryRegex);
    const slMath = input.match(slRegex);

    if (!entryMatch || !slMath) return null; // Không tìm thấy giá trị "ENTRY :"
    let entryRangeStr = entryMatch[1];
    let slValue = parseFloat(slMath[1])
    let entryMatch2 = entryRangeStr.replace(/-/g, '').trim().split(' ').map(Number).filter(num => !isNaN(num));;

    const entryValue = entryMatch2; // Lấy giá trị "ENTRY :"

    const targets: number[] = [];
    let targetMatch;
    while ((targetMatch = targetRegex.exec(input)) !== null) {
        targets.push(parseFloat(targetMatch[2])); // Lấy giá trị của các target
    }

    return { entry: entryValue, targets, slValue };
}

// Test với đoạn chuỗi đầu vào
const input2 = `📦 #CELO/USDT - Small Size
🔦 Bearish IDEA 🐻

🪤 Max leverage recommended: 10X - 20X

✓ ENTRY  : - 0.764 - 0.788

💵 Target 1: 0.753
💵 Target 2: 0.733
💵 Target 3: 0.711
💵 Target 4: 0.686
💵 Target 5: 0.649
💵 Target 6: 0.611

🪄 Stop | Loss : 0.803`;

const result2 = extractValues2(input2);
if (result2) {
    console.log("Giá trị ENTRY:", result2.entry);
    console.log("Giá trị Stop Loss:", result2.slValue);

    console.log("Giá trị của các target:", result2.targets);
} else {
    console.log("Không tìm thấy giá trị ENTRY hoặc các target.");
}





const myApp = new App();

myApp.run();
