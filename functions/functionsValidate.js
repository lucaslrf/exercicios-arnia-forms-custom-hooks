/**
     * Validar o CPF Digitado
     * @param {String} string | value
     * @link https://www.devmedia.com.br/validar-cpf-com-javascript/23916
     */
let validateCpf = function (value) {
    try {
        let sum
        let rest
        let strCPF = value.replace('-', '').replace('.', '').replace('.', '')
        sum = 0
        if (strCPF === '00000000000') return false

        for (let i = 1; i <= 9; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (11 - i)
        rest = (sum * 10) % 11

        if ((rest === 10) || (rest === 11)) rest = 0
        if (rest !== parseInt(strCPF.substring(9, 10))) return false

        sum = 0
        for (let i = 1; i <= 10; i++) sum = sum + parseInt(strCPF.substring(i - 1, i)) * (12 - i)
        rest = (sum * 10) % 11

        if ((rest === 10) || (rest === 11)) rest = 0
        return rest === parseInt(strCPF.substring(10, 11));

    } catch (e) {
        console.error('validateCpf Error: ', e)
        return false
    }
}

/**
 * Validar o CNPJ Digitado
 * @param {String} string | value
 * @link https://devarthur.com/javascript/funcao-javascript-para-validar-cnpj/
 * @link https://gist.github.com/alexbruno/6623b5afa847f891de9cb6f704d86d02
 */
let validateCNPJ = function (value) {
    try {
        value = value.replace(/[^\d]+/g, '')

        if (value === '') return false

        if (value.length !== 14)
            return false

        // Eliminate CNPJ invalids
        if (value === '00000000000000' ||
            value === '11111111111111' ||
            value === '22222222222222' ||
            value === '33333333333333' ||
            value === '44444444444444' ||
            value === '55555555555555' ||
            value === '66666666666666' ||
            value === '77777777777777' ||
            value === '88888888888888' ||
            value === '99999999999999')
            return false

        let length = value.length - 2
        let numbers = value.substring(0, length)
        let digits = value.substring(length)
        let sum = 0
        let pos = length - 7
        for (let i = length; i >= 1; i--) {
            sum += numbers.charAt(length - i) * pos--
            if (pos < 2)
                pos = 9
        }
        let result = sum % 11 < 2 ? 0 : 11 - sum % 11
        if (result != digits.charAt(0))
            return false

        length = length + 1
        numbers = value.substring(0, length)
        sum = 0
        pos = length - 7
        for (let i = length; i >= 1; i--) {
            sum += numbers.charAt(length - i) * pos--
            if (pos < 2)
                pos = 9
        }
        result = sum % 11 < 2 ? 0 : 11 - sum % 11
        return result == digits.charAt(1);


    } catch (e) {

        return false
    }

}