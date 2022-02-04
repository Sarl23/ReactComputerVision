// Define our labelMap
const labelMap = {
    1:{name:'1', color:'blue'},
    2:{name:'2', color:'red'},
    3:{name:'3', color:'brown'},
    4:{name:'4', color:'oranje'},
    5:{name:'5', color:'black'},
    6:{name:'6', color:'yellow'},
    7:{name:'7', color:'purple'},
    8:{name:'8', color:'green'},
    9:{name:'9', color:'gray'},
    10:{name:'10', color:'pink'},
    11:{name:'a', color:'blue'},
    12:{name:'abrazar', color:'oranje'},
    13:{name:'ajo', color:'black'},
    14:{name:'arte', color:'purple'},
    15:{name:'b', color:'green'},
    16:{name:'c', color:'pink'},
    17:{name:'casa', color:'blue'},
    18:{name:'d', color:'red'},
    19:{name:'dedos', color:'brown'},
    20:{name:'dormir', color:'oranje'},
    21:{name:'e', color:'black'},
    22:{name:'el-ella', color:'purple'},
    23:{name:'f', color:'green'},
    24:{name:'fotografo', color:'blue'},
    25:{name:'frente', color:'red'},
    26:{name:'g', color:'brown'},
    27:{name:'gracias', color:'oranje'},
    28:{name:'h', color:'black'},
    29:{name:'hola', color:'purple'},
    30:{name:'hombros', color:'pink'},
    31:{name:'homosexual', color:'blue'},
    32:{name:'hospital', color:'red'},
    33:{name:'i', color:'brown'},
    34:{name:'insor', color:'oranje'},
    35:{name:'juicioso', color:'pink'},
    36:{name:'k', color:'black'},
    37:{name:'l', color:'green'},
    38:{name:'m', color:'blue'},
    39:{name:'mama', color:'red'},
    40:{name:'medico', color:'brown'},
    41:{name:'mio', color:'oranje'},
    42:{name:'muchos', color:'purple'},
    43:{name:'mujer', color:'green'},
    44:{name:'n', color:'blue'},
    45:{name:'naranja', color:'red'},
    46:{name:'nariz', color:'brown'},
    47:{name:'no', color:'oranje'},
    48:{name:'o', color:'black'},
    49:{name:'optimista', color:'purple'},
    50:{name:'oracion', color:'green'},
    51:{name:'oreja', color:'pink'},
    52:{name:'p', color:'green'},
    53:{name:'pensar', color:'pink'},
    54:{name:'q', color:'blue'},
    55:{name:'r', color:'red'},
    56:{name:'si', color:'brown'},
    57:{name:'t', color:'oranje'},
    58:{name:'tiempo', color:'pink'},
    59:{name:'u', color:'black'},
    60:{name:'universidad', color:'purple'},
    61:{name:'v', color:'blue'},
    62:{name:'vagina', color:'red'},
    63:{name:'w', color:'brown'},
    64:{name:'y', color:'oranje'},
}

// Define a drawing funtions
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) =>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i] > threshold){
            const [y, x, height, width]= boxes[i];
            const text = classes[i];
            ctx.strokeStyle = labelMap[text]['color'];
            ctx.lineWidth = 8;
            ctx.fillStyle = 'white';
            ctx.font = '30px Arial';
            
            ctx.beginPath();
            ctx.fillText(labelMap[text]['name']+'-'+ Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight);
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/1.5);
            ctx.stroke();
        }
    }
}