import { Component } from '@angular/core';
import { CoreModule } from "../../../../core/core-module";
import { Header } from "../../components/contact-header/contact-header";
import { ContactForm } from "../../components/contact-form/contact-form";
import { BestSeller } from "../../../landing/components/best-seller/best-seller";
import { HelpSection } from "../../../../shared/components/help-section/help-section";

@Component({
  selector: 'app-contact-page',
  imports: [CoreModule, Header, ContactForm, BestSeller, HelpSection],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css'
})
export class ContactPage {

}
