var table='fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF'
var tr={}
var s = [11,10,3,8,4,6]
var xor = 177451812
var add = 8728348608
for(i=0; i<table.length; i++) {
    tr[table[i]]=i
}

function decodeBV(bvInput) {
    var av=0
    for (i=0; i<s.length; i++) {
        av += tr[bvInput[s[i]]]*table.length**i
    }
    return (av-add)^xor
}

function encode2BV(avInput) {
    avInput = (avInput^xor)+add
    var output = ['B', 'V', '1', ' ', ' ', '4', ' ', '1', ' ', '7', ' ', ' ']
    for (i=0; i<s.length; i++) {
        output[s[i]]=table[Math.floor(avInput/table.length**i)%table.length]
    }
    return output.join('')
}