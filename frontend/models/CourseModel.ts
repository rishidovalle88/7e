interface Default {
	id: number;
	title: string;
    description: string;
	isActive: boolean;
	userId: number;
}

export interface Class extends Default {
	idModule: number;
}

export interface Module extends Default {
	idCourse: number;
	classes: Class[];
}

export interface Course extends Default {	
    modules: Module[];
}
