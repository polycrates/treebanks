# David Chamberlain's Greek and Latin Treebanks
I'm currently focused on adapting verse treebanks so that they will play well with syllabic standoff annotation for metrical quantities etc. Work is underway on Francesco Mambrini's tragedy treebanks. I use the ones published at https://perseusdl.github.io/treebank_data/ rather than https://github.com/francescomambrini/Daphne, though I note that he and I are doing some overlapping work (e.g. division of crasis, addition of speakers). Data is in public/xml; trees can be browsed at https://polycrates.github.io/treebanks/; first attempt at combining the tree, metrical data and a glossary at https://hypotactic.com/sophocles/OT.html.

I'm also using this repository to host other treebanks for embedding, such as Apuleius Met 1 and 2.

February 2025: added Aristophanes' Frogs. I started with the auto-tagged version at the Glaux project (https://github.com/alekkeersmaekers/glaux); so far I've made one full readthrough and edit. I also normalized to precomposed characters. The AI auto-tagger did a much better job than I imagined it could, but it has still taken me a full week of work to come up with something I think is useful and trustworthy. I'll be making further tweaks to this before I teach the text in April. I also considered using Celano's auto-tagged version from OGA (https://github.com/OperaGraecaAdnotata/OGA: see the conll treebanks for maximum convenience), but the Glaux version seemed a little more accurate, with a better treatment of crasis, and (most importantly) speaker information preserved in the treebank.

# Main Changes from perseusdl treebanks:
- separate all words in crasis; addition of attributes crasis="1" or crasis="2" to such words. Relation data for these forms currently requires much correction (e.g ἁγώ generally includes both subject and object of the verb, which is exactly why crasis needs to be separated).
- add full="καὶ" etc. attribute to words whose form is modified by elision or crasis. Amongst other things this makes the treebanks much more useful as pedagogical tools.
- remove e from postags: choose either m or p for voice.
- add speaker="..." attribute to sentence. This will break if a treebank tags 'finishing each others' sentences' in *antilabe* as a single sentence, but I don't think Mambrini ever does that (though it's worth considering).


# Readme for the forked repo:
#
# Treebank Template

Template for publishing collections of treebanks.

The treebanks themselves live in the `./public/xml` directory.
All other configuration is done using `./src/config.json`.

## Try it Out

[https://perseids-publications.github.io/treebank-template/](https://perseids-publications.github.io/treebank-template/)

## Get started with your own treebanks

* Getting Started: [https://perseids-publications.github.io/treebank-template/instructions/getting-started/](https://perseids-publications.github.io/treebank-template/instructions/getting-started/)
* Registering a DOI: [https://perseids-publications.github.io/treebank-template/instructions/doi](https://perseids-publications.github.io/treebank-template/instructions/doi)
* Updating: [https://perseids-publications.github.io/treebank-template/instructions/updating](https://perseids-publications.github.io/treebank-template/instructions/updating)
* Alpheios Integration: [https://perseids-publications.github.io/treebank-template/examples/alpheios-integration](https://perseids-publications.github.io/treebank-template/examples/alpheios-integration)

## Technical details

### How to get started using the command line

The *Getting Started* instructions above use the GitHub web interface.
To create an instance of the Treebank Template with your own trees using the command line,
follow the steps below:

```
git clone git@github.com:perseids-publications/treebank-template.git my-trees
cd my-trees
git remote rename origin source
git remote add origin <my-trees origin>
git push -u origin master
```

* Copy all your trees into `public/xml`
* Update the `src/config.json` file
* Update `name` and `homepage` in `package.json`
* Set the version in `package.json` to `1.0.0`
* Update the information in `.env`

### Configuration

See [docs/CONFIG.md](docs/CONFIG.md) for more information about the format of `src/config.json`.

### Updating

The easiest way to update the Treebank Template code is to follow the instructions
in the *Updating* link above.
Alternatively, you can use Git's built in merging functionality.
A typical update may involve the following steps:

* `git pull source master --no-commit` (if there is no `source` repository, then run
  `git remote add source https://github.com/perseids-publications/treebank-template.git`
  then `git pull source master --no-commit`)
* Fix merge conflicts:
```bash
git checkout --theirs .
git checkout --ours public/xml
git checkout --ours .env
git checkout --ours README.md
git checkout --ours src/config.json
```
* Run `git status`. In some cases there may be files that are marked as `deleted by them`.
  For each of these, do `git rm <path-to-file>`
* The `package.json` needs to be edited manually. The `name`, `version,` and `homepage` fields should reflect
  `origin`, while all other values should reflect `source`
* `git add .`
* `git commit`
* `git push origin master`

### Installation

`yarn install`

### Running the development server

`yarn start`

### Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/lexica/lsj` then run
`PUBLIC_URL='./lexica/lsj' yarn build`.

### Deploying a new version to github.io

`yarn deploy`

### Zenodo DOI

The easiest way to register a DOI and add it to your collection of treebanks is to follow
the instructions in the *Registering a DOI* link above.
The instructions below explain an alternative method that is more complicated but more configurarable.

#### Zenodo

* Visit [Zenodo](https://zenodo.org/deposit/new), log in, and create a new upload
* Click the "Reserve DOI" button in the "Basic information" section
* Keeping the window open, open your command line/console and navigate to the repository

#### Git

* In `src/config.json`, add or update the `doi` field to the DOI generated in the above step (preceded by `https://dx.doi.org/`)
* Update the version in `package.json` (try to use [SemVer](https://semver.org/))
* Push the code to `master`
* Keeping the Zenodo window open, in another tab or window open the repository on GitHub

#### GitHub

* Make a new release titled "Release vA.B.C" where "A.b.C" is the version in `package.json` and use the same string ("vA.B.C") in the "Tag Version" field
* Enter a description then click "Publish release"
* Download the release as a `tar.gz` file
* Go back to the Zenodo window or tab

#### Zenodo

* Add the `tar.gz` file to the upload
* Fill in the following fields:
  * Communities: add the `perseids-project` community and any others that may be relevant
  * Upload type: Dataset
  * Basic information:
    * Title: the title of the treebank collection
    * Authors: the author(s) who contributed to the treebanks
    * Description: a description of the dataset
    * Version: the version in `package.json`
  * License:
    * Access right: Open Access
    * License: Creative Commons Attribution 4.0 International
  * Fill in any other fields that are relevant
* Click "Publish"

## Licenses

The code is licensed under the MIT license (see `LICENSE` file).
The treebanks are licensed under the CC BY-SA 4.0 license (see `TREEBANK_LICENSE` file).
