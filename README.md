[![][License img]][License]
[![][MainRepo img]][MainRepo]
[![][AltRepo img]][AltRepo]

<a href="http://lpsc.in2p3.fr/" target="_blank">
	<img src="https://ami.web.cern.ch/images/logo_lpsc.png" alt="LPSC" height="72" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://www.in2p3.fr/" target="_blank">
	<img src="https://ami.web.cern.ch/images/logo_in2p3.png" alt="IN2P3" height="72" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://www.univ-grenoble-alpes.fr/" target="_blank">
	<img src="https://ami.web.cern.ch/images/logo_uga.png" alt="UGA" height="72" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://home.cern/" target="_blank">
	<img src="https://ami.web.cern.ch/images/logo_atlas.png" alt="CERN" height="72" />
</a>
&nbsp;&nbsp;&nbsp;&nbsp;
<a href="http://atlas.cern/" target="_blank">
	<img src="https://ami.web.cern.ch/images/logo_cern.png" alt="CERN" height="72" />
</a>

AMI Web Framework (AWF)
=======================

This is the official distribution repository of the AMI Web Framework (AWF).

Getting started
===============

```bash
curl --proto '=https' --tlsv1.2 -sSf https://repo.ami-ecosystem.in2p3.fr/releases/net/hep/ami/AWF/1.0.0/AWF-1.0.0.py > awf.py

chmod a+x ./awf.py

./awf.py --update-prod
./awf.py --create-home-page
```

Documentation there: https://ami-ecosystem.in2p3.fr/

Developers
==========

* [Jérôme ODIER](https://annuaire.in2p3.fr/4121-4467/jerome-odier) ([CNRS/LPSC](http://lpsc.in2p3.fr/))
* [Fabian LAMBERT](https://annuaire.in2p3.fr/3087-3350/fabian-lambert) ([CNRS/LPSC](http://lpsc.in2p3.fr/))
* [Jérôme FULACHIER](https://annuaire.in2p3.fr/2061-2240/jerome-fulachier) ([CNRS/LPSC](http://lpsc.in2p3.fr/))
* [Maxime JAUME]() ([CNRS/LPSC](http://lpsc.in2p3.fr/))

[License]:http://www.cecill.info/licences/Licence_CeCILL-C_V1-en.txt
[License img]:https://img.shields.io/badge/license-CeCILL--C-blue.svg

[MainRepo]:https://gitlab.in2p3.fr/ami-team/AMIWebFramework
[MainRepo img]:https://img.shields.io/badge/Main%20Repo-gitlab.in2p3.fr-success

[AltRepo]:https://github.com/ami-team/awf-dist
[AltRepo img]:https://img.shields.io/badge/Alt%20Repo-github.com-success