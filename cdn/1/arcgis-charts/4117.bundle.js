"use strict";(self.webpackChunkexb_client=self.webpackChunkexb_client||[]).push([[4117],{4117:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b,additionalProperty:()=>P,anyOfValues:()=>E,bubbleChartValidateMsg:()=>x,defaultError:()=>i,defaultInvalidChart:()=>l,duplicateSeriesID:()=>u,enumValues:()=>g,histogramEmptyField:()=>I,layerLoadFailure:()=>d,lineChartMarkersCannotExceedLimit:()=>V,lineChartSeriesAndMarkersCannotExceedLimit:()=>f,maxItems:()=>L,minItems:()=>c,minLength:()=>h,negativeValueInDataForLogTransformation:()=>s,negativeValueInDataForSqrtTransformation:()=>m,nonNumericAggregation:()=>C,pieChartSlicesCannotExceedLimit:()=>y,queryError:()=>S,requiredProperty:()=>$,threePlusSeriesBarCountCannotExceedLimit:()=>o,twoSeriesBarCountCannotExceedLimit:()=>n,uniqueSeriesBarCountCannotExceedLimit:()=>r,whiteSpacePattern:()=>p});const i="Παρουσιάστηκε κάποιο σφάλμα κατά τη φόρτωση του γραφήματος.",r="Υπάρχουν συνολικά ${ elementCount } γραμμές για το γράφημα αυτό. Για τα γραφήματα ράβδων με μία σειρά ισχύει όριο ${ totalLimit } ράβδων. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",n="Για τα γραφήματα ράβδων με δύο σειρές ισχύει όριο ${ totalLimit } ράβδων ή ${ seriesLimit } ράβδων ανά σειρά. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",o="Για τα γραφήματα ράβδων με τρεις ή περισσότερες σειρές ισχύει όριο ${ totalLimit } ράβδων ή ${ seriesLimit } ράβδων ανά σειρά. Επιλέξτε ένα πεδίο Κατηγορίας με λιγότερες μοναδικές τιμές ή εφαρμόστε φίλτρο στα δεδομένα σας.",l="Παρουσιάστηκε κάποιο σφάλμα κατά τη δημιουργία του γραφήματος.",s="Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού αρχείου καταγραφής σε αρνητικές ή μηδενικές τιμές.",m="Δεν είναι δυνατή η εφαρμογή του μετασχηματισμού τετραγωνικής ρίζας σε αρνητικές τιμές.",d="Παρουσιάστηκε κάποιο σφάλμα κατά τη φόρτωση του θεματικού επιπέδου. Διεύθυνση URL = ${ url }. Αναγνωριστικό αντικειμένου του portal = ${ portalItemId }.",u="Το ${ dataPath } πρέπει να είναι μοναδικό. Η σειρά με το όνομα ${ seriesName } έχει αναγνωριστικό (${ seriesID }) που ήδη χρησιμοποιείται από κάποια άλλη σειρά.",C="Το ${ dataPath } δεν μπορεί να εκτελέσει συνάθροιση χωρίς μέτρηση σε μη αριθμητικό πεδίο.",$="Από το ${ dataPath } λείπει μια ιδιότητα με το όνομα ${ missingProperty }.",h="Το ${ dataPath } δεν πρέπει να έχει λιγότερους από ${ limit } χαρακτήρες.",c="Το ${ dataPath } δεν πρέπει να έχει λιγότερα από ${ limit } στοιχεία.",L="Το ${ dataPath } δεν πρέπει να έχει περισσότερα από ${ limit } στοιχεία.",p="Το ${ dataPath } πρέπει να έχει τουλάχιστον έναν χαρακτήρα που να μην είναι κενό διάστημα.",P="Το ${ dataPath } δεν πρέπει να έχει ${ additionalProperty }.",g="Το ${ dataPath } πρέπει να ισούται με μία από τις εξής επιτρεπόμενες τιμές: ${ allowedValues }.",E="Το ${ dataPath } πρέπει να συμφωνεί με τη δομή ενός από τα εξής: ${ schemaOptions }.",x="Δεν υποστηρίζονται γραφήματα διασποράς με αναλογικά σύμβολα. Έχει εφαρμοστεί το προεπιλεγμένο μέγεθος συμβόλου.",S="Αποτυχία ανάγνωσης δεδομένων εισόδου",I="Τα ιστογράμματα απαιτούν τουλάχιστον δύο αριθμητικές τιμές.",y="Υπάρχουν συνολικά ${ sliceCount } τμήματα σε αυτό το γράφημα πίτας. Τα γραφήματα πίτας περιορίζονται σε ${ totalLimit } τμήματα. Επανασυναθροίστε ή φιλτράρετε τα δεδομένα σας.",f="Υπάρχουν συνολικά ${ seriesCount } σειρές και ${ elementCount } σημεία δεδομένων σε αυτό το γράφημα. Τα γραφήματα γραμμών περιορίζονται σε ${ seriesLimit } σειρές και ${ totalLimit } σημεία δεδομένων. Μειώστε τον αριθμό σειρών ή/και επανασυναθροίστε ή φιλτράρετε τα δεδομένα σας.",V="Τα γραφήματα γραμμών περιορίζονται σε ${ totalLimit } σημεία δεδομένων. Φιλτράρετε ή συγκεντρώστε εκ νέου τα δεδομένα σας και δοκιμάστε ξανά.",b={defaultError:i,uniqueSeriesBarCountCannotExceedLimit:r,twoSeriesBarCountCannotExceedLimit:n,threePlusSeriesBarCountCannotExceedLimit:o,defaultInvalidChart:l,negativeValueInDataForLogTransformation:s,negativeValueInDataForSqrtTransformation:m,layerLoadFailure:d,duplicateSeriesID:u,nonNumericAggregation:C,requiredProperty:$,minLength:h,minItems:c,maxItems:L,whiteSpacePattern:p,additionalProperty:P,enumValues:g,anyOfValues:E,bubbleChartValidateMsg:x,queryError:S,histogramEmptyField:I,pieChartSlicesCannotExceedLimit:y,lineChartSeriesAndMarkersCannotExceedLimit:f,lineChartMarkersCannotExceedLimit:V}}}]);