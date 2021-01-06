const calc = {
    inputString: "",
    value1: number, //float number
    value2: number, //float number
    displayResult: number, //pushed to display - input will check for strings, if not then result will be cleared, limited to 10 characters
    operatorTriggered: false,

    // operatorValue: {
    //     none : 0,
    //     oneByX : 1,
    //     sqrt : 2,
    //     sqr : 3,
    //     divide : 4,
    //     multiply : 5,
    //     subtract : 6,
    //     add : 7
    // },

    //function clearing value strings
    clear() {
        this.value1 = "";
        this.value2 = "";
        this.operatorTriggered = false;
        (this.displayResult = 0),
            (this.inputString = ""),
            (document.getElementById("calc-result").value = this.displayResult);
    },

    //function adding values to value1 and displaying them --- only here value1 and value2 are strings
    display(num) {
        if (this.displayResult != 0) {
            this.inputString = `${num}`;
            this.displayResult = this.inputString;
            document.getElementById("calc-result").value = this.inputString;
        } else if (this.operatorTriggered === false) {
            this.value1 = this.value1 + num;
            document.getElementById("calc-result").value = this.value1;
            // console.log("display -> document.getElementById("calc-result").value", document.getElementById("calc-result").value);
        } else {
            document.getElementById("calc-result").value = "";
            this.value2 = this.value2 + num;
            document.getElementById("calc-result").value = this.value2;
        }
    },

    //function for single value operations
    calculateSingle() {},

    //function for double value operations
    calculateDouble() {
        let result = 0;

        //condition added for doing operations with shorthand, where second value equals the first such as 4*=
        if (this.value2 == "") {
            this.value2 = this.value1;
        }

        switch (this.operatorValue) {
            case "+":
                result = parseFloat(this.value1) + parseFloat(this.value2);
                break;
            case "-":
                result = parseFloat(this.value1) - parseFloat(this.value2);
                break;
            case "/":
                result = parseFloat(this.value1) / parseFloat(this.value2);
                break;
            case "*":
                result = parseFloat(this.value1) * parseFloat(this.value2);
                break;

            default:
                document.getElementById("calc-result").value = "ERR";
        }
        this.displayResult11 = result.toString();
        document.getElementById(
            "calc-result"
        ).value = this.displayResult11.substring(0, 11);
        this.value1 = result;
        this.value2 = "";
        // this.operatorValue = ""; --needs to be commented to allow chain calculations on the same value--
        this.operatorTriggered = false;
    },

    //function for triggering operators for double value operations
    trigger(val) {
        this.operatorTriggered = true;
        this.operatorValue = val;
    },

    //function for finding square root of x
    sqrtX() {
        this.value1 = Math.sqrt(this.value1);
        this.displayResult11 = this.value1.toString();
        document.getElementById(
            "calc-result"
        ).value = this.displayResult11.substring(0, 11);
    },

    //function for squaring value1
    sqrX() {
        this.value1 = Math.pow(this.value1, 2);
        this.displayResult11 = this.value1.toString();
        document.getElementById(
            "calc-result"
        ).value = this.displayResult11.substring(0, 11);
    },

    //function converting number to 1/x
    oneByX() {
        if (this.operatorTriggered === false) {
            this.value1 = 1 / parseFloat(this.value1);
            this.displayResult11 = this.value1.toString();
            document.getElementById(
                "calc-result"
            ).value = this.displayResult11.substring(0, 11);
        } else {
            this.value2 = 1 / parseFloat(this.value2);
            this.displayResult11 = this.value2.toString();
            document.getElementById(
                "calc-result"
            ).value = this.displayResult11.substring(0, 11);
        }
    },

    //function calc-dot
    dot() {
        if (a > b) {
        }
    },
};
