import { Component } from '@angular/core';
import { ToastController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  radioSelecionada:string='';
  mensagem:string='';

  constructor(
    public toastController: ToastController, //são objetos //class letra MAISUCULA //objeto n pode ter msm nome class
    public alertController: AlertController
  ) {}

  verificarRadio() { //ta chamando p executar as ações

    if (this.radioSelecionada=== 'option 1'){
          this.mensagem='Você escolheu a opção 1';
    }else{
      if(this.radioSelecionada=== 'option 2'){
          this.mensagem='Você escolheu a opção 2';
    }
    else{
      this.mensagem='Você escolheu a opção 3';
    }
  }

    this.exibirToast(); //eai chama o método
    this.exibirAlerta();
  }

  async exibirToast() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000,
      color:"danger",
      position:'top'
    });
    toast.present();
  }

  async exibirAlerta() {
    const alert = await this.alertController.create({
      header: 'Esta é uma mensagem de exemplo.',
      message: this.radioSelecionada,
      buttons: ['OK']
    });
    alert.present();
  }

}