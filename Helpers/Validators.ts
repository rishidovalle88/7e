import { ChangeEvent } from 'react';

export function PhoneMask(phone: string, e: ChangeEvent<HTMLInputElement>) {
	var numbers = /^[a-zA-Z]+$/;
	if (phone.match(numbers)) {
		e.currentTarget.style.borderColor = 'red';
		return {
			phone: '',
			isValid: false
		};
	}

	if (phone.length === 14) {
		var x = phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,4})(\d{0,4})/);
		phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
		e.currentTarget.style.borderColor = '#35C772';
		return {
			phone: phone,
			isValid: true
		};
	}

	var x = phone.replace(/\D/g, '').match(/(\d{0,2})(\d{0,5})(\d{0,4})/);
	phone = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');

	var _isValid = phone.length === 14 || (phone.length === 15 && phone[5] === '9') ? true : false;

	e.currentTarget.style.borderColor = _isValid ? '#35C772' : 'red';

	return {
		phone: phone.substring(0, phone.length >= 15 ? 16 : phone.length),
		isValid: _isValid
	};
}

export function ValidateEmail(mail: string, e: ChangeEvent<HTMLInputElement>) {
	if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
		e.currentTarget.style.borderColor = '#35C772';
		return true;
	}
	e.currentTarget.style.borderColor = 'red';
	return false;
}

export function ValidaCEP(cep: string): boolean {
	let valid = [];

	//Verifica se esta vazio ou undefined
	valid.push(!cep);

	if (cep) {
		cep = cep.replace("-", "");
		
		// Valida se tem 9 números
		valid.push(cep.length === 9);

		// Valida se não tem espaço em branco
		valid.push(!cep.includes(' '));

		// Valida se não possui Letras
		valid.push(!cep.match(/[a-zA-Z]/i));
	}

	return valid.includes(false);
}
