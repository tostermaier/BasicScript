const basicEditor = {

    runCode : function () {
        basicEditor.clearMemoryConsole();
        basicEditor.clearConsole()
        let editor = document.getElementById("basicEditor");

        basicScript.file = this.splitCode(editor.value);
        basicScript.run()

    },

    clearConsole:function(){
        let console = document.getElementById("basicConsole");
        console.innerHTML = "";
    },
    writeToConsole : function(val){
        let out = document.getElementById("basicConsole");
        if(out != null){
            out.innerHTML += val+"<br>";
        }
        else{
            document.write(val+"<br>")
        }
    },
    splitCode : function (code) {
        return code.split("\n");
    },

    writeMemoryConsole : function (val) {
        console.log("print val",val)
        let out = document.getElementById("basicMemory");


        if(out != null){

            val.forEach((vale,key)=>{
                out.innerHTML += key+ " : " + JSON.stringify(vale)+"<br><br>";
            });

        }
    },
    clearMemoryConsole : function () {
        let console = document.getElementById("basicMemory");
        console.innerHTML = "";
    }
};