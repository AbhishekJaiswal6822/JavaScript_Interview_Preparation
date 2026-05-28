# Lexical Scope
## In lexical scope child fn can access prop methods value of parent fn 

``` javascript

function parentFunction(){
    let username="Abhishek"
    function childFunction(){
        console.log("Inner",username)
    }
    childFunction()
}
parentFunction()
```