import React from "react";
import { Page, Text, View, Document, StyleSheet, Image, Link, Note } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    maxWidth: '49%',
    boxSizing: 'border-box'
  },
  image: {
    width: '100%',
    height: 'auto',
  }
});

export const MyDocument = () => {
  const baseAPI = "https://maps.googleapis.com/maps/api/staticmap";
  const googleMapApiConfig = {
    center: '32 wulemotu ajoke street akoka',
    size: '500x240',
    zoom: '15',
    maptype: 'roadmap',
    key: "AIzaSyD9dg8mZSoO75tQD9r4wES9pjvHmBmRW6Q"
  };

  const documentProps = {
    title: 'Test Document',
    author: 'Stackworx', //This is all metadata. Title and Author are vaguely important, you can safely ignore the rest.
    subject: 'testing stuff?',
    keywords: 'Seriously, even Google deosn\'t bother with this',
    creator: 'Stackworx',
    producer: 'file this under "nobody bothers with this"',
    onRender: () => {console.log('this is only for display, not download.')} //If displaying the pdf (preview mode), you can call the onRender for functionality.
  };

  const pageProps = {
    size: "A4",
    style: styles.page,
    orientation: "portrait",
    wrap: true, //This causes content that fills more than 1 page to form more pages. Don't ever set this to false, unless you're handling content size elsewhere
    debug: false, //used to check rendering (padding, margins, etc)
    //there's also a bunch of ruler stuff we'll probably never care about
  };

  const imgSrc = `${baseAPI}?center=${googleMapApiConfig.center}&size=${googleMapApiConfig.size}&zoom=${googleMapApiConfig.zoom}&maptype=${googleMapApiConfig.maptype}&key=${googleMapApiConfig.key}&markers=blue|${googleMapApiConfig.center}`;
   return ( <Document {...documentProps}>
      <Page {...pageProps}>
        <View style={{...styles.section, backgroundColor: 'black'}}>
            <View style={{width: 50, height: 50, backgroundColor: 'rgba(0, 255, 0, 50)',}}></View>
          <Note>
            Annotations on the content of the document. Basically PDF Popups.
          </Note>
          <Text>Section #1</Text>
          <Text style={{fontSize: 10}}>
            You can fit a lot of info on a PDF. On LOC8 we're using PDF's to generate Brochures, but you can also use them for things like reports (such as from BluLabel or Metcon). You can also use it to generate a preformatted document in other contexts.
          </Text>
        </View>
        <View style={styles.section}>
          <Text>
          Styles are fairly limited in a very specific way:

          Valid properties:
              - Flex stuff (display, align, etc)
              - Position stuff (top, bottom, absolute/relative)
              - Dimensions: Width/height, min, max both supported.
              - Colour, BGColour, Opacity. Other bg attributes are NOT SUPPORTED
              - Text attributes: All you can eat, from fontSize to textdecoration
              - objectFit/objectPosition
              - Margins/Padding: The worx
              - Transform
              - Borders: Not all styles supported but otherwise go nuts.
          </Text>
        </View>
        <View style={styles.section}>
          <Link src={"http://google.com"}>
            <Image
              style={styles.image}
              src={imgSrc}
            />
          </Link>
        </View>
      </Page>
    </Document>
  );
};