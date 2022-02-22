import React from "react";
import {
  IonButton, 
  IonButtons, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonHeader, 
  IonIcon, 
  IonInput, 
  IonList, 
  IonMenuButton, 
  IonPage, 
  IonRow, 
  IonSegment, 
  IonSegmentButton, 
  IonText, 
  IonTitle, 
  IonToolbar,
  setupIonicReact
} from "@ionic/react";
import { search, closeOutline } from "ionicons/icons";
import './Search.css';

const Search: React.FC = () => {
  setupIonicReact();
  
  return (
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons slot="start">
                    <IonIcon color="dark" size="small" slot="end" icon={search} ></IonIcon>
                </IonButtons>
                {/* value="Chicken" hanya untuk sampel */}
                <IonInput autofocus={true} placeholder="Search" value="Chicken"></IonInput>

                <IonButton size="small" class="searchBtn" slot="end" fill="clear" routerLink="/page/home">
                    <IonText color="medium">Cancel</IonText>
                </IonButton>
            </IonToolbar>
            <IonSegment color="dark" value="all">
                <IonSegmentButton value="all"> <p className="segmentText">All</p></IonSegmentButton>
                <IonSegmentButton value="jouleApp">Joule App</IonSegmentButton>
                <IonSegmentButton value="chefSteps">ChefSteps.com</IonSegmentButton>
            </IonSegment>
        </IonHeader>

        <IonContent>
            <IonList>
                <IonRow class="sub">
                    <IonText>Visual Doneness Guides</IonText>
                </IonRow>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Ultimate Fried Noodle
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Basic Chicken Breast
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Ultimate Chicken Thighs
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Foolproof Fried Chicken
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Juicy Grilled Chicken Leg
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Guide Boost: Green Curry Chicken
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Black Pepper Chicken, With Chef Gregory Gourdet
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Herbed Chicken Breast, Broccoli, and Potatoes With Jef Nelson
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgA1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                        Ultimate Fried Noodle
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        VISUAL DONENESS GUIDES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>

                <IonRow class="sub">
                    <IonText>Just Time & Temp</IonText>
                </IonRow>

                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgB1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken leg</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgB1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken leg</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgB1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken leg</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgB1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken leg</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgB1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken leg</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>



                <IonRow class="sub">
                    <IonText>ChefSteps.com Result</IonText>
                </IonRow>

                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Can't-F***-It-Up Fried Chicken</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken Liver Pate</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Sour Vide Chicken Breast</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Crispy Chicken Thighs Made Simple With Sous Vide</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Smokerless Smoked Chicken</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken Wings</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Tips & Tricks: Best Way to Truss a Chicken</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chicken Roulade</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Ultimate Korean Fried Chicken</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Black Pepper Chicken, With Chef Gregory Gourdet</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b>Chrispy Chicken With Broccoli Cheddar Gourdet</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonCard>
                    <IonRow class="cardRow">
                        <IonCol size="3" class="imgCol">
                            <IonCardHeader class="imgC1"></IonCardHeader>
                        </IonCol>
                        <IonCol size="9" class="textCol">
                            <IonCardContent>
                                <IonRow>      
                                    <IonText color="dark" class="text1">
                                       <b> Crispy Chicken Legs</b>
                                    </IonText>
                                </IonRow>
                                <IonRow>
                                    <IonText color="medium" class="text2">
                                        CHEFSTEPS.COM
                                    </IonText>
                                </IonRow>
                            </IonCardContent>
                        </IonCol>
                    </IonRow>
                </IonCard>
            </IonList>
        </IonContent>
    </IonPage>
  );
};

export default Search;