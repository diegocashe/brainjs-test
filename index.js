const brain = require('brain.js');

// Red neuronal capaz de definir la el riesgo de cada dia   

const net = new brain.NeuralNetwork({
    hiddenLayers: [10, 40, 20]

});

const TrainingData = [
    { input: { dia: 1, hora: 20 }, output: { no: 1 } },
    { input: { dia: 1, hora: 5 }, output: { no: 1 } },
    { input: { dia: 1, hora: 7 }, output: { si: 1 } },
    { input: { dia: 2, hora: 20 }, output: { no: 1 } },
    { input: { dia: 2, hora: 5 }, output: { no: 1 } },
    { input: { dia: 2, hora: 7 }, output: { si: 1 } },
    { input: { dia: 3, hora: 20 }, output: { no: 1 } },
    { input: { dia: 3, hora: 5 }, output: { si: 1 } },
    { input: { dia: 3, hora: 7 }, output: { no: 1 } },
    { input: { dia: 4, hora: 20 }, output: { si: 1 } },
    { input: { dia: 4, hora: 5 }, output: { si: 1 } },
    { input: { dia: 4, hora: 7 }, output: { no: 1 } },
    { input: { dia: 5, hora: 20 }, output: { no: 1 } },
    { input: { dia: 5, hora: 5 }, output: { no: 1 } },
    { input: { dia: 5, hora: 7 }, output: { si: 1 } },
]

net.train(TrainingData, {
    log: true
});
const { si, no } = net.run({ dia: 5, hora: 20 })
console.log(`Por favor ${(si > no) ? 'SI' : 'NO'} opere ya que las probabilidades son: \nBuena operacion: ${(si * 100).toFixed(1)}%\nMala Operacion:  ${(no * 100).toFixed(1)}%`)
