import { Component } from "@angular/core";

import { Platform, MenuController, AlertController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
@Component({
  selector: "menu-example",
  templateUrl: "app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
    private alert: AlertController
  ) {
    this.initializeApp();

    this.platform.backButton.subscribe(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openFirst() {
    this.menu.enable(true, "first");
    this.menu.open("first");
  }

  openEnd() {
    this.menu.open("end");
  }

  openCustom() {
    this.menu.enable(true, "custom");
    this.menu.open("custom");
  }

  toggleMenu() {
    this.menu.toggle();
  }

  async sair() {
    const alert = await this.alert.create({
      header: "Atenção",
      message: "Encerrar o aplicativo?",
      buttons: [
        {
          text: "Não",
          handler: () => {},
        },
        {
          text: "Sim",
          handler: () => {
            navigator["app"].exitApp();
          },
        },
      ],
    });
    await alert.present();
  }
}
