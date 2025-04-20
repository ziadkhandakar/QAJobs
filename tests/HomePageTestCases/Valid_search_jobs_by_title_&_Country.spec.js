import {test, expect} from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('Jobs are visible when valid search is performed', async ({ page }) => {
    const home= new HomePage(page);
    await home.gotoHome();
  
    const jobList = page.locator('div.jet-listing-grid__item');
  
    await expect(jobList.first()).toBeVisible();
  
    const jobCount = await jobList.count();
    console.log('Found', jobCount, 'job(s).');
  
    expect(jobCount).toBeGreaterThan(0);
  });