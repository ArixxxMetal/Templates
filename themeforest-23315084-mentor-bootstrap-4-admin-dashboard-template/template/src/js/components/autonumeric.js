(function(window, document, $, undefined){
    $(function(){
        var autonumeric = jQuery(".autonumber");
        if (autonumeric.length > 0) {
             /****** Spanish-numeric ******/
                new AutoNumeric('#Spanish', 'Spanish');
                /****** NorthAmerican-numeric ******/
                new AutoNumeric('#NorthAmerican', 'NorthAmerican');
                /****** British-numeric ******/
                new AutoNumeric('#British', 'British');
                /****** Swiss-numeric ******/
                new AutoNumeric('#Swiss', 'Swiss');
                /****** Japanese-numeric ******/
                new AutoNumeric('#Japanese', 'Japanese');
                /****** Chinese-numeric ******/
                new AutoNumeric('#Chinese', 'Chinese');
                /****** Brazilian-numeric ******/
                new AutoNumeric('#Brazilian', 'Brazilian');
                /****** Turkish-numeric ******/
                new AutoNumeric('#Turkish', 'Turkish');
                /****** DecimalCharCommaSeparator-numeric ******/
                new AutoNumeric('#DecimalCharCommaSeparator', 'dotDecimalCharCommaSeparator');
                /****** commaDecimalCharDotSeparator-numeric ******/
                new AutoNumeric('#commaDecimalCharDotSeparator', 'commaDecimalCharDotSeparator');
                /****** integer-numeric ******/
                new AutoNumeric('#integer', 'integer');
                /****** integerPos-numeric ******/
                new AutoNumeric('#integerPos', 'integerPos');
                /****** integerNeg-numeric ******/
                new AutoNumeric('#integerNeg', 'integerNeg');
                /****** float-numeric ******/
                new AutoNumeric('#float', 'float');
                /****** floatPos-numeric ******/
                new AutoNumeric('#floatPos', 'floatPos');
                /****** floatNeg-numeric ******/
                new AutoNumeric('#floatNeg', 'floatNeg');
                /****** numeric-numeric ******/
                new AutoNumeric('#numeric', 'numeric');
                /****** numericPos-numeric ******/
                new AutoNumeric('#numericPos', 'numericPos');
                /****** numericNeg-numeric ******/
                new AutoNumeric('#numericNeg', 'numericNeg');
                /****** euro-numeric ******/
                new AutoNumeric('#euro', 'euro');
                /****** euroPos-numeric ******/
                new AutoNumeric('#euroPos', 'euroPos');
                /****** euroNeg-numeric ******/
                new AutoNumeric('#euroNeg', 'euroNeg');
                /****** euroSpace-numeric ******/
                new AutoNumeric('#euroSpace', 'euroSpace');
                /****** euroSpacePos-numeric ******/
                new AutoNumeric('#euroSpacePos', 'euroSpacePos');
                /****** euroSpaceNeg-numeric ******/
                new AutoNumeric('#euroSpaceNeg', 'euroSpaceNeg');
                /****** dollar-numeric ******/
                new AutoNumeric('#dollar', 'dollar');
                /****** dollarPos-numeric ******/
                new AutoNumeric('#dollarPos', 'dollarPos');
                /****** dollarNeg-numeric ******/
                new AutoNumeric('#dollarNeg', 'dollarNeg');
                /****** french-numeric ******/
                new AutoNumeric('#percentageEU2dec', 'percentageEU2dec');
                /****** percentageEU2decPos-numeric ******/
                new AutoNumeric('#percentageEU2decPos', 'percentageEU2decPos');
                /****** percentageEU2decNeg-numeric ******/
                new AutoNumeric('#percentageEU2decNeg', 'percentageEU2decNeg');
                /****** percentageUS2dec-numeric ******/
                new AutoNumeric('#percentageUS2dec', 'percentageUS2dec');
                /****** percentageUS3decPos-numeric ******/
                new AutoNumeric('#percentageUS3decPos', 'percentageUS3decPos');
                /****** percentageUS3decNeg-numeric ******/
                new AutoNumeric('#percentageUS3decNeg', 'percentageUS3decNeg');
        }

    });

})(window, document, window.jQuery);