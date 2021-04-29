import { ChangeEvent } from "react";

export function cepMask(e: ChangeEvent<HTMLInputElement>){

    // FUNÇÃO INCOMPLETA

    let valid = [];
    let cep = e.currentTarget.value;
    if (cep) {
		cep = cep.replace("-", "");
		
		// Valida se tem 9 números
		valid.push(cep.length === 9);

		// Valida se não tem espaço em branco
		valid.push(!cep.includes(' '));

		// Valida se não possui Letras
		valid.push(!cep.match(/[a-zA-Z]/i));
	}
}