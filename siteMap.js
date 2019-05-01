let sitemap = document.querySelectorAll(".siteMap");

console.log(sitemap);

// function traverse2() {
//   let one = 0,
//     two = 0,
//     three = 0,
//     four = 0,
//     five = 0,
//     six = 0,
//     seven = 0,
//     eight = 0,
//     nine = 0;
  

  // Loop for ancestor == Home Government etc
//   for (let a = 0; a < sitemap[0].children.length; a++) {
//     one++;
//     // Some of the elements have the entire list inside their innerText, and we need a way to stop the loop and go inside the nested list
//     if (sitemap[0].children[a].innerText.length < 30) { 
//       console.log(
//         `${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
//           sitemap[0].children[a].innerText
//         }`
//       );
//     } else if (sitemap[0].children[a].innerText.length > 30) {
//       let lvl1 = sitemap[0].children[a];
//       console.log(
//         `${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
//           lvl1.childNodes[1].innerText
//         }`
//       );
//       // Now we go through the first nested list
//       for (let b = 0; b < lvl1.children[1].children.length; b++) {
//         console.log(lvl1.children[1].children[a].childNodes[1].innerText)
//       }
//     }
//   }
// }

// traverse2();

traverse = () => {
  let one = 0,
    two = 0,
    three = 0,
    four = 0,
    five = 0,
    six = 0,
    seven = 0, eight = 0, nine = 0;

  levelOne = sitemap[0].previousElementSibling.childNodes;

  

  for (let a = 0; a < levelOne.length; a++) {
    if (levelOne[a].innerText) {
      let lvl1 = levelOne[a].innerText;
      one++;
      console.log(
        `${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${lvl1}`
      );

      /*
      This next group of loops finds the second level of indexing
    */
   if (one == 2) {
    for (let b = 0; b < sitemap[0].children.length; b++) {
      two = 0;
      for (let c = 0; c < sitemap[0].children[b].childNodes.length; c++) {
        if (!sitemap[0].children[b].childNodes[c].children) {
          continue;
        } else {
          for (
            let d = 0;
            d < sitemap[0].children[b].childNodes[c].children.length;
            d++
          ) {
            if (
              !sitemap[0].children[b].childNodes[c].children[d].childNodes
            ) {
              continue;
            } else {
              for (
                let e = 0;
                e <
                sitemap[0].children[b].childNodes[c].children[d].childNodes
                  .length;
                e++
              ) {
                if (
                  !sitemap[0].children[b].childNodes[c].children[d]
                    .childNodes[e].localName
                ) {
                  continue;
                } else if (
                  sitemap[0].children[b].childNodes[c].children[d].childNodes[
                    e
                  ].localName == "a"
                ) {
                  let lvl2 =
                    sitemap[0].children[b].childNodes[c].children[d]
                      .childNodes[e].innerText;
                  two++;
                  console.log(
                    `    ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${lvl2}`
                  );
                } else if (
                  sitemap[0].children[b].childNodes[c].children[d].childNodes[
                    e
                  ].localName == "ol"
                ) {
                  /* Now we get the third */
                  three = 0;
                  for (
                    let f = 0;
                    f <
                    sitemap[0].children[b].childNodes[c].children[d]
                      .childNodes[e].childNodes.length;
                    f++
                  ) {
                    if (
                      sitemap[0].children[b].childNodes[c].children[d]
                        .childNodes[e].childNodes[f].localName
                    ) {
                      let lvl3 =
                        sitemap[0].children[b].childNodes[c].children[d]
                          .childNodes[e].childNodes[f].childNodes[1]
                          .innerText;
                      three++;
                      console.log(
                        `        ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${lvl3}`
                      );
                      /* Now the fourth*/
                      for (
                        let g = 0;
                        g <
                        sitemap[0].children[b].childNodes[c].children[d]
                          .childNodes[e].childNodes[f].childNodes.length;
                        g++
                      ) {
                        four = 0;
                        if (
                          sitemap[0].children[b].childNodes[c].children[d]
                            .childNodes[e].childNodes[f].childNodes[g]
                            .localName == "ol"
                        ) {
                          for (
                            let h = 0;
                            h <
                            sitemap[0].children[b].childNodes[c].children[d]
                              .childNodes[e].childNodes[f].childNodes[g]
                              .childNodes.length;
                            h++
                          ) {
                            if (
                              sitemap[0].children[b].childNodes[c].children[d]
                                .childNodes[e].childNodes[f].childNodes[g]
                                .childNodes[h].localName == "li"
                            ) {
                              four++;
                              console.log(
                                `            ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight}.${nine} ${
                                  sitemap[0].children[b].childNodes[c]
                                    .children[d].childNodes[e].childNodes[f]
                                    .childNodes[g].childNodes[h].childNodes[1]
                                    .innerText
                                }`
                              );
                            }
                            /* Now the fifth */
                            five = 0;
                            for (let i = 0; i <  sitemap[0].children[b].childNodes[c]
                              .children[d].childNodes[e].childNodes[f]
                              .childNodes[g].childNodes[h].childNodes.length; i++) {
                                if (sitemap[0].children[b].childNodes[c]
                                  .children[d].childNodes[e].childNodes[f]
                                  .childNodes[g].childNodes[h].childNodes[i].localName == "ol") {
                                        five++;
                                        console.log(`                ${one}.${two}.${three}.${four}.${five}.${six}.${seven}.${eight} ${sitemap[0].children[b].childNodes[c]
                                          .children[d].childNodes[e].childNodes[f]
                                          .childNodes[g].childNodes[h].childNodes[i].childNodes[1].innerText}`)
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
};

traverse();
