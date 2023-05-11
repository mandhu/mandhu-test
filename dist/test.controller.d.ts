import { TestService } from './test.service';
export declare class TestController {
    private readonly appService;
    constructor(appService: TestService);
    getHello(): string;
}
