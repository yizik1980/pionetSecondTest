export class page {

	constructor() {
	}
	id: number;
	title: string;
	content: string;
	htmlContent: string;
	create_at: Date;
	nickName: string;
	category_id: number;
}
export class errorModel extends page {
	constructor() {
		super();
	}
	clear() {

	}
	validate(constrain: validationConstrains) {
		if (!constrain.content && constrain.isRequire) {
			this[constrain.prop] = constrain.errorMsg;
			return false;
		}
		if (constrain.pattarn) {
			if (!constrain.pattarn.test(constrain.content)) {
				this[constrain.prop] = constrain.pattarnErrorMsg;
				return false;
			}
		}
		this[constrain.prop] = '';
		return true;
	}
}

export class validationConstrains {
	constructor(args: any) {
		this.isRequire = args.isReqire || false;
		this.prop = args.prop;
		this.content = args.content;
		this.errorMsg = args.errorMsg;
		this.pattarn = args.pattarn || null;
		this.pattarnErrorMsg = args.pattarnErrorMsg;
	}
	isRequire: boolean;
	prop: string;
	content: string;
	pattarn: RegExp;
	errorMsg: string;
	pattarnErrorMsg: string;
}



