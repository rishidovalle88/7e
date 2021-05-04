interface Default {
	id: number;
	title: string;
    description: string;
}

export interface Class extends Default {}

export interface Module extends Default {
	classes: Class[];
}

export interface Course extends Default {
    modules: Module[];
}
