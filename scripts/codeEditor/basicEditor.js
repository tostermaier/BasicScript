const basicEditor = {

    runCode : function () {
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
    }


};