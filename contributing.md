---
layout: page
title: Contributing
permalink: /contributing/
---

This is a collectively maintained project. The code and data are hosted on GitHub at [open-archaeo/diamond.open-archaeo.info](https://github.com/open-archaeo/diamond.open-archaeo.info). You can also reach us in our Matrix room at `#diamond.open-archaeo:archaeo.social`

Please submit a pull request or get in touch to create a new item in the list or modify existing records.

To create a new record, create a markdown (.md) file using the following template and place it in the `_journals` directory. Name the file after the name of the journal, replacing spaces with underscores (i.e. `archeologia_e_calcolatori.md`).

```yaml
---
title: Archeologia e Calcolatori
model: diamond
peer_reviewed: true
website: https://www.archcalc.cnr.it/
issn: 1120-6861
publisher: Consiglio Nazionale delle Ricerche
languages:
- fr
- en
- de
- it
- es
---
```

If the journal has an embargo period, please add the optional `embargo` field specifying the number of months, i.e. `embargo: 12`

This website is meant to showcase the excellent work being done to make archaeological knowledge more publicly accessible. The scope therefore includes archaeological journals, data repositories, open peer-review platforms and other relevant services that adhere to non-restrictive OA principles.

Please open a [GitHub Issue](https://github.com/open-archaeo/diamond.open-archaeo.info/issues) to share any critical feedback or to suggest any new features.
