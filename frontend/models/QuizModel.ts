export interface Response {
	id: number;
	title: string;
	isCorrect: boolean;
}

export interface Question {
	id: number;
	title: string;
	responses: Response[];
}

export interface Quiz {
	id: number;
	title: string;
	questions: Question[];
}
