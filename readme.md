# Date Picker (Bootstrap)

#### Date Picker Is Js Library For Date Purposes To Work With Bootstrap
#### Of Course Made By Mahdi Tasha ;)
![alt text](assets/base/img/img-radme.PNG)
## Installation

##### Use the Github Clone And Clone Project By :
```
git clone https://github.com/MohamadMahdi-Tasha/datePicker.git
```
## Usage
Firstly You Got To Import Files. You Got 2 Options :

1) Import Orginal Files

2) Import Minified Files

```Html
<link rel="stylesheet" href="src/bootstrap-date-picker.css">
<script src="src/bootstrap-date-picker.min.js"></script>
OR
<link rel="stylesheet" href="src/bootstrap-date-picker.min.css">
<script src="src/bootstrap-date-picker.js"></script>
```

The Benefits Of Using Minified Version Of Files Is That It Makes Your Page Load Faster

After You Linked Files You Can Use It In Your Html Files Like This:

```Html
<mt-date-picker style-variables="--mt-date-picker-primary: #5D3891;--mt-date-picker-darker-primary: #3c245d;--mt-date-picker-secondary: #E8E2E2;--mt-date-picker-darker-secondary: #a4a0a0;--mt-date-picker-shadow: 0 5px 10px rgba(0,0,0,.08);--mt-date-picker-font-family:Poppins, sans-serif !important" date-picker-position="center"></mt-date-picker>
OR
<mt-date-picker></mt-date-picker>
```

The Second Example Above Will Create Date Picker With Custom Styles And Position
But The First One Is Custom 

# Events
We Have One Event Yet And That's Fired When Date Is Applied ('mtDatePickerDateSelected').

```javascript
datePicker.addEventListener('mtDatePickerDateSelected', () => {
    console.log('event')
})
```

# Custom Attributes
There Is Three Custom Attributes Yet :
1) style-variables : For Setting Variables To Use In Styles In If One Of Them Goes Wrong You'll Get An Error (Both, Visually And In Console)
2) date-picker-position : For Setting Position Of Date Picker
3) toggler-text-content : For Setting Text Content Of Date Picker Toggler 

# Recap
### Attributes:

| Attribute                                  | About It                                                                                                                |
|--------------------------------------------|-------------------------------------------------------------------------------------------------------------------------|
| style-variables                            | For Setting Variables To Use In Styles In If One Of Them Goes Wrong You'll Get An Error (Both, Visually And In Console) |
| date-picker-position                       | For Setting Position Of Date Picker                                                                                     |
| toggler-text-content                       | For Setting Text Content Of Date Picker Toggler                                                                         |

### style-variables:

| Variable                           | Value                                                     |
|------------------------------------|-----------------------------------------------------------|
| --mt-date-picker-primary           | Hex Color Like: #fff                                      |
| --mt-date-picker-darker-primary    | Hex Color Like: #fff                                      |
| --mt-date-picker-secondary         | Hex Color Like: #fff                                      |
| --mt-date-picker-darker-secondary  | Hex Color Like: #fff                                      |
| --mt-date-picker-shadow            | shadow-box value Like: 0,0,30px, #fff                     |
| --mt-date-picker-font-family       | font-family Value Like: sans-serif, serif, ... !important |

Note: Note That !Important In  '--mt-date-picker-font-family' Is Very Important Because It Overrides Font Family Of Bootstrap
Note: Another Note Is All Of These Variables Should Be Together Otherwise You'll Get An Error

### Variables:
| Name                 | About It                            | Value                           |
|----------------------|-------------------------------------|---------------------------------|
| style-variables      | Contains Variables Of Styles To Use | The Table Above  (All Together) |
| date-picker-position | Position Of Date Picker             | center,left,right (Only One)    |

Note: Note That The Attributes Above Are Optional But If You Use Them Their Value Should Be Complete

### Events: 
| Event                     | About It                         |
|---------------------------|----------------------------------|
| mtDatePickerDateSelected  | Triggered When User Apples Date  |

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.