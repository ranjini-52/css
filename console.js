console.log('default method of printing the output');
console.error('It is used to display error msg to the user')
console.warn('This is used to display the warning msg to the user')
console.info('This is used to the msg or information in string format to the user')
let arr=["1","2","3","4","5"]
console.table(arr)
let obj={
    Name:'Ranjini',
    Skill:'WebTechnology',
    Timings:8
}
console.table(obj)
let str="hai";
    for(let i=1;i<=10;i++){
        console.count(str)
    }
console.time("tracetime")
for(let i=1;i<=10;i++){
    console.count(i)
}
console.timeEnd("tracetime")
