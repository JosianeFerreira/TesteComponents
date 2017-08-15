import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private barcodeText:String;
   private barcodeFormat:String;
   private platform:Platform;	
   private navController:NavController;
   codigo: string;

  constructor(public navCtrl: NavController, private barcodeScanner: BarcodeScanner, platform:Platform) {
    this.platform = platform;
    this.navController = navCtrl;
  }

  doScan(){
    console.log('scannig product barcode');
    this.platform.ready().then(() => {
      this.barcodeScanner.scan().then((result) => {
        if (!result.cancelled) {
          this.barcodeText = result.text;
          this.barcodeFormat = result.format;
          this.scanningDone({'text':result.text,'format':result.format});                
        }
      }, (error) => {
        alert('error when scanning product barcode');
        console.log('error when scanning product barcode');
      });
    });  		
  }
  scanningDone(data){
    this.codigo = data.text;     
    //this.navController.push(ScannedPage, {data: data});
  }

}
