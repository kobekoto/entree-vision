import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { AboutService } from './about.service';
import { ENV } from '../environments/environment';

describe('AboutService', () => {
    let injector: TestBed;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    const AboutEndpoint = `${ENV.API_URL}/about`;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AboutService]
        });
        httpClient = TestBed.get(HttpClient);
        httpTestingController = TestBed.get(HttpTestingController);

    });

    afterEach(inject([HttpTestingController], (httpTestingController: HttpTestingController) => {
        httpTestingController.verify();
    }));


    it ('should make a GET request', 
        async(inject([HttpClient, HttpTestingController], (http: HttpClient, httpTestingController: HttpTestingController) => {
            http.get(AboutEndpoint).subscribe();

            httpTestingController.expectOne({
                url: AboutEndpoint,
                method: 'GET'
            });
        }))
    );

});
