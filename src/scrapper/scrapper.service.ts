import { Injectable } from '@nestjs/common';
import * as puppeteer from 'puppeteer'
import { DataService } from '../modules/data/services/data.service';
import { Data } from '../modules/data/entities/data.entity'


@Injectable()
export class ScrapperService {
    constructor(private readonly dataService: DataService) { }
    
    async addData(result) {
        result.forEach(async (e) => {
            
            const existData = await this.dataService.findData(e.title)
            
            if (!existData) {
                const data = new Data()
                data.title = e.title
                data.price = e.price
                data.city = e.city
                return this.dataService.create(data)
            }
            return
        });
     }
    
    async getData() {
       const URL='https://www.olx.ua/list/'
       const browser = await puppeteer.launch({
            headless:false
        });
        const page = await browser.newPage();
        await page.goto(URL, {
            waitUntil: 'networkidle2'
        });
        const results = await page.evaluate(() => {
            const propertyList = []
            document.querySelectorAll('.wrap').forEach((z) => {
                const data = {
                    title: z.querySelector('td.title-cell > div > h3 > a > strong')?.textContent,
                    price: z.querySelector('td.wwnormal.tright.td-price > div > p > strong')?.textContent,
                    city: z.querySelector('td.bottom-cell > div > p > small:nth-child(1) > span')?.textContent,
                }
                propertyList.push(data);
            })
            return propertyList; 
        })

       await browser.close();
       this.addData(results)
       return results;
    }
}
