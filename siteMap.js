let sitemap = document.querySelectorAll(".siteMap");

console.log(sitemap);

function mapSite() {
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    seven = 0,
    eight = 0,
    nine = 0;
  // The first 'layer' of the sitemap list. Each child is a 'li' containing deeper nesting
  let layer1 = sitemap[0].children;
  // loop through layer 1
  for (let a = 0; a < layer1.length; a++) {
    two = 0;
    // layer1List is the list of outer titles. Each child from layer1 has children with the list title
    let layer1List = layer1[a].children[0];
    if (layer1List.innerText) {
      one++;
      console.log(
        `${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
          layer1List.innerText
        }`
      );
    }
    // Passes 'Home'
    if (one > 1) {
      two = 0;
      if (layer1[a].childNodes[3].localName == "ol") {
        // The Second 'layer of the sitemap list
        let layer2 = layer1[a].childNodes[3].children;
        // loop through layer two and log the pages
        for (let b = 0; b < layer2.length; b++) {
          three = 0;
          two++;
          console.log(
            `${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
              layer2[b].children[0].innerText
            }`
          );

          if (
            layer2[b].childNodes[3] &&
            layer2[b].childNodes[3].localName == "ol"
          ) {
            let layer3 = layer2[b].childNodes[3].children;
            // Loops third layer
            for (let c = 0; c < layer3.length; c++) {
              four = 0;
              three++;
              console.log(
                `  ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                  layer3[c].children[0].innerText
                }`
              );

              if (
                layer3[c].childNodes[3] &&
                layer3[c].childNodes[3].localName == "ol"
              ) {
                let layer4 = layer3[c].childNodes[3].children;

                for (let d = 0; d < layer4.length; d++) {
                  five = 0;
                  four++;
                  console.log(
                    `    ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                      layer4[d].children[0].innerText
                    }`
                  );
                  //layer 5
                  if (
                    layer4[d].childNodes[3] &&
                    layer4[d].childNodes[3].localName == "ol"
                  ) {
                    let layer5 = layer4[d].childNodes[3].children;

                    for (let e = 0; e < layer5.length; e++) {
                      six = 0;
                      five++;
                      console.log(
                        `      ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                          layer5[e].children[0].innerText
                        }`
                      );
                      // Layer six
                      if (
                        layer5[e].childNodes[3] &&
                        layer5[e].childNodes[3].localName == "ol"
                      ) {
                        let layer6 = layer5[e].childNodes[3].children;

                        for (let f = 0; f < layer6.length; f++) {
                          seven = 0;
                          six++;
                          console.log(
                            `        ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                              layer6[f].children[0].innerText
                            }`
                          );
                          // Layer seven
                          if (
                            layer6[f].childNodes[3] &&
                            layer6[f].childNodes[3].localName == "ol"
                          ) {
                            let layer7 = layer6[f].childNodes[3].children;

                            for (let g = 0; g < layer7.length; g++) {
                              eight = 0;
                              seven++;
                              console.log(
                                `          ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                                  layer7[g].children[0].innerText
                                }`
                              );

                              // Layer eight
                              if (
                                layer7[g].childNodes[3] &&
                                layer7[g].childNodes[3].localName == "ol"
                              ) {
                                let layer8 = layer7[g].childNodes[3].children;
                                for (let h = 0; h < layer8.length; h++) {
                                  nine = 0;
                                  eight++;
                                  console.log(
                                    `            ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                                      layer8[h].children[0].innerText
                                    }`
                                  );

                                  // Layer nine
                                  if (
                                    layer8[h].childNodes[3] &&
                                    layer8[h].childNodes[3].localName == "ol"
                                  ) {
                                    let layer9 =
                                      layer8[h].childNodes[3].children;
                                    for (let i = 0; i < layer9.length; i++) {
                                      nine++;
                                      console.log(
                                        `            ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                                          layer9[i].children[0].innerText
                                        }`
                                      );
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

mapSite();
