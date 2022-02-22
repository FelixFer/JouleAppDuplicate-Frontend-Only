import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonFab, IonFabButton, IonGrid, IonHeader, IonIcon, IonList, IonMenuButton, IonPage, IonRow, IonText, IonToolbar } from '@ionic/react';
import { qrCodeOutline, search } from 'ionicons/icons';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Page: React.FC = () => {

  return (
    <IonPage>      
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonButton class="searchBtn" slot="end" fill="clear" routerLink="/search">
            <IonText color="dark">Search</IonText>
            <IonIcon color="dark" size="small" slot="end" icon={search} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent class="content">
        <IonGrid class="mainBanner">
          <IonRow>
            <IonCol class="pad">
              <img src="./assets/images/homeBanner.jpg"></img>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonRow class="miniTitle">
            <IonText> <p className="miniTitle">Search by Type</p> </IonText>
        </IonRow>

        <IonGrid>
          <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/beef.png" alt="" />
                <IonText> <p className="cardText">Beef</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/seafood.png" alt="" />
                <IonText> <p className="cardText">Seafood</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/poultry.png" alt="" />
                <IonText> <p className="cardText">Poultry</p> </IonText>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/pork.png" alt="" />
                <IonText> <p className="cardText">Pork</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/lamb.png" alt="" />
                <IonText> <p className="cardText">Lamb</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/game.png" alt="" />
                <IonText> <p className="cardText">Game</p> </IonText>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/vegetables.png" alt="" />
                <IonText> <p className="cardText">Vegetables</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/desserts.png" alt="" />
                <IonText> <p className="cardText">Desserts</p> </IonText>
              </IonCard>
            </IonCol>
            <IonCol size="4">
              <IonCard class="card">
                <img className="cardImg" src="./assets/images/other.png" alt="" />
                <IonText> <p className="cardText">Other</p> </IonText>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonRow class="miniTitle">
            <IonText> <p className="miniTitle">Search by Type</p> </IonText>
        </IonRow>

        <IonList class="cardList">
          <IonCard>
            <IonRow>
              <IonCol class="guideImg" size='6'><img className="imgH" src="./assets/images/h1.jpg"></img></IonCol>
              <IonCol class="guideText" size='6'>
                <IonText >Get Started: Basic Guides</IonText>
              </IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol class="guideImg" size='6'><img className="imgH" src={"./assets/images/h1.jpg"}></img></IonCol>
              <IonCol class="guideText" size='6'><IonText>Quick & Easy</IonText></IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol class="guideImg" size='6'><img className="imgH" src={"./assets/images/h1.jpg"}></img></IonCol>
              <IonCol class="guideText" size='6'><IonText>Cook in a Jar &#8212; No Bag Required</IonText></IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol class="guideImg" size='6'><img className="imgH" src={"./assets/images/h1.jpg"}></img></IonCol>
              <IonCol class="guideText" size='6'><IonText>All the Guides</IonText></IonCol>
            </IonRow>
          </IonCard>
          <IonCard>
            <IonRow>
              <IonCol class="guideImg" size='6'><img className="imgH" src={"./assets/images/h1.jpg"}></img></IonCol>
              <IonCol class="guideText" size='6'><IonText>Joule Ready (Available in the US)</IonText></IonCol>
            </IonRow>
          </IonCard>
        </IonList>
      </IonContent>

      <IonFab vertical="bottom" horizontal="center" slot="fixed" >
        <IonButton color="light" shape="round" type="button" size="small" class="btnBottom">
          <IonText color="primary">Search for Joule</IonText>
        </IonButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton color="light">
          <IonIcon icon={qrCodeOutline} />
        </IonFabButton>
      </IonFab>
    </IonPage>
  );
};

export default Page;
