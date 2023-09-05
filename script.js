//1
function call(name, callback) {
    console.log('Hi' + ' ' + name);
    callback();
}
function callMe() {
    console.log('I am callback function');
}

call('Archana', callMe);

        //2
        function number(callback){
            let a=1
            function print(){
                console.log(a)
                a++
                if(a<=7){
                    setTimeout(print,a*1000)
                }
                else{
                    callback()
                }
            }
            print()
        }
        number(()=>{
            console.log('end')
        })

        //3
        function print(num,timeout){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log(num)
                    resolve("promise resolved")
                },timeout)
            })
        }
        print(1,1000)
        .then(()=>print(2,2000))
        .then(()=>print(3,3000))
        .then(()=>print(4,4000))
        .then(()=>print(5,5000))
        .then(()=>print(6,6000))
        .then(()=>print(7,7000))

        //4
        var ans = function (yes) {
            return new Promise(function (resolve, reject) {
                if (yes) {
                    resolve("Promise Resolved")
                } else {
                    reject(" Promise Rejected")
                }
            });
        };
        ans(true).then(function (answer) {
            console.log(answer);
        }).catch(function (err) {
            console.warn(err);
        });

        //5
        function add(a, b) {
            console.log(a + b)
          }
          
          function value(val1, val2, callback) {
            callback(val1, val2)
          }
          
          value(5, 3, add)

          //6
          function main(callback){
            console.log('hi')
            callback()
        }
        function abc(callback){
            console.log('I am ')
            callback()
        }
        function def(callback){
            console.log('Learning')
            callback()
        }
        function last(callback){
            console.log('callback hell')
            callback()
        }
        
        main(()=>{
            console.log('started')
            abc(()=>{
                def(()=>{
                    last(()=>{
                        console.log('end')
                    })
                })
            })
        })

        //7
        var a=new Promise(function(resolve,reject){
            resolve('let go to the vacation')
        })
        a.then((result)=>{
            console.log(result)
        })

        //8
        let promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
            resolve('Promise resolved')}, 1000); 
        });
        
        async function asyncFunc() {
            let result = await promise; 
        
            console.log(result);
            console.log('hello');
        }
        
        asyncFunc();

        //9
        function user(userId){
            return new Promise(function (resolve, reject) {
                setTimeout(()=>{
                    const user="Mahi"
                    resolve(user)
                },1000)
            })
    }
    function Orders(userId){
            return new Promise(function (resolve, reject) {
                setTimeout(()=>{
                    const order="Apple,orange"
                    resolve(order)
                },1000)
            })
    }
    function Comments(userId){
            return new Promise(function (resolve, reject) {
                setTimeout(()=>{
                    const comment="Good"
                    resolve(comment)
                },1000)
            })
    }
    const userId=1
    Promise.all([user(userId),Orders(userId),Comments(userId)])
    .then(res=>{
        console.log(res)
    })
