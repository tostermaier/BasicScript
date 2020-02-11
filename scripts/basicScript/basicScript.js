const basicScript = {
    file : ["10 \"20*10", "20 int test = 120",'5 print "120 teast wadf" waf   '
    , '25 print "123+13"'],
    test : null,
    run: function(){
        memory.clearMemory()
        let lines = parser.parseLines(this.file)
        let tokenizeLines = tokenizer.createTokensForLines(lines)
        interpreter.interpretLines(tokenizeLines)
        basicConsole.writeToMemoryConsole(memory.variableMemory)
    }
};