# Stasis

A lightweight responsive startup page with a tree-like structure intended to be run as a local file without the need for a webserver. 

[**Live-Demo Available Here**](https://12q1.github.io/Stasis/)

Color palette was inspired by [Ethan Schoonover's Solarized color scheme](https://ethanschoonover.com/solarized/).
The tree-like structure is shamelessly ripped from [dylancwood's tree.css magic](https://gist.github.com/dylancwood/7368914) which I do not fully understand but will happily copy. 

Code is provided under a do-whatever-you-want license, feel free to fork, modify, tweak. If you have suggestions or want to submit a pull request just reach out.

![image](https://github.com/12q1/Stasis/assets/42697100/58908135-f78b-4239-9823-4a7126d15dc9)

---

If you want to modify the setup for your own use you can edit the JSON stored directly in the index.html file. **Just make sure it's a valid JSON structure**. At this time the setup does not support nested objects, in other words it only supports a single flat layer of key-value pairs. 

It is stored directly in the html file instead of a separate JSON file because trying to fetch a local file will throw a CORS policy violation unless the setup is hosted on a webserver which I wanted to avoid.

![image](https://github.com/12q1/Stasis/assets/42697100/79bec95e-8520-48a5-9200-3536c234c0f2)

