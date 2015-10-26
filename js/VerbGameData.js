var VerbGameData = {
    tenses: {
        'particípio presente': {
            'name': 'particípio presente',
            'example': '',
            'description': '',
            'english': 'present participle',
            'requires_subject': false
        },
        'particípio pasado': {
            'name': 'particípio pasado',
            'example': '',
            'description': '',
            'english': 'past participle',
            'requires_subject': false
        },
        'presente do indicativo': {
            'name': 'presente do indicativo',
            'example': '',
            'description': '',
            'english': 'present indicative',
            'requires_subject': true
        },
        'progresivo presente': {
            'name': 'progresivo presente',
            'example': 'I am [gerund]',
            'description': '',
            'english': 'present progressive',
            'requires_subject': true
        },
        'imperfeito do indicativo': {
            'name': 'imperfeito do indicativo',
            'example': 'I was [gerund], I used to [verb]',
            'description': 'Used to tell what was happening or what used to happen.',
            'english': 'imperfect indicative',
            'requires_subject': true
        },
        'pretérito mais-que-perfeito simples do indicativo': {
            'name': 'pretérito mais-que-perfeito simples do indicativo',
            'example': 'I had [past participle]',
            'description': (
                'Mostly literary, almost never used in conversation. Used ' +
                'to describe an action that had taken place before another action in the past.'
            ),
            'english': 'simple pluperfect indicative',
            'requires_subject': true
        },
        'pretérito perfeito do indicativo': {
            'name': 'pretérito perfeito do indicativo',
            'example': '',
            'description': '',
            'english': 'preterit indicative',
            'requires_subject': true
        },
        'futuro do indicativo': {
            'name': 'futuro do indicativo',
            'example': '',
            'description': '',
            'english': 'future indicative',
            'requires_subject': true
        },
        'presente composto do indicativo': {
            'name': 'presente composto do indicativo',
            'example': 'I have [past participle], I have been [gerund] a lot these days.',
            'description': (
                'Preterite is usually used in this case.  However, for repeating action that ' +
                'carries into the current or likely into the future, this tense is used.'
            ),
            'english': 'present perfect indicative',
            'requires_subject': true
        },
        'pretérito mais-que-perfeito composto do indicativo': {
            'name': 'pretérito mais-que-perfeito composto do indicativo',
            'example': 'I had [past participle]',
            'description': 'Used to describe an action that had taken place before another action in the past.',
            'english': 'past perfect indicative',
            'requires_subject': true
        },
        'futuro perfeito do indicativo': {
            'name': 'futuro perfeito do indicativo',
            'example': 'I will/shall have [past participle] before Sunday.',
            'description': 'Used to refer to an action that will have taken place before another action in the future.',
            'english': 'future perfect indicative',
            'requires_subject': true
        },
        'condicional simples': {
            'name': 'condicional simples',
            'example': 'I would/should [verb]',
            'description': '',
            'english': 'conditional',
            'requires_subject': true
        },
        'condicional perfeito ou composto': {
            'name': 'condicional perfeito ou composto',
            'example': 'I would/should have [past participle]',
            'description': '',
            'english': 'conditional perfect',
            'requires_subject': true
        },
        'presente do subjuntivo': {
            'name': 'presente do subjuntivo',
            'example': (
                '<ul>' +
                    '<li>I hope that [new subject] [subjunctive]</li>' +
                    '<li>I wish that [new subject] [subjunctive]</li>' +
                    '<li>I doubt that [new subject] [subjunctive]</li>' +
                    '<li>It is possible that he [subject] [subjunctive]</li>' +
                    '<li>As soon as [subject] [subjunctive]' +
                '</ul>'
            ),
            'description': (
                '<ul>' +
                    '<li>' +
                        'After a verb of desiring, requesting, permitting, forbidding, etc. ' +
                        'in the main clause of the sentence, the subjunctive is used in the dependant ' +
                        'clause when the dependant clause has a different subject.' +
                    '</li>' +
                    '<li>' +
                        'After expressions of emotion, such as hoping, fearing, being glad, being sorry, etc., ' +
                        'when there is a change of subject.' +
                    '</li>' +
                    '<li>' +
                        'After verbs of doubting.' +
                    '</li>' +
                    '<li>' +
                        'After impersonal expressions such as "it is necessary" or "it is possible".' +
                    '</li>' +
                    '<li>' +
                        'After certain conjunctions, such as "antes que" or "logo que".' +
                    '</li>' +
                '</ul>'
            ),
            'english': 'present subjunctive',
            'requires_subject': true
        },
        'imperfeito do subjuntivo': {
            'name': 'imperfeito do subjuntivo',
            'example': (
                '<ul>' +
                    '<li>I was hoping that [new subject] [subjunctive]</li>' +
                    '<li>I was wishing that [new subject] [subjunctive]</li>' +
                    '<li>I doubted that [new subject] [subjunctive]</li>' +
                    '<li>It was possible that he [subject] [subjunctive]</li>' +
                    '<li>As soon as [subject] [subjunctive]' +
                    '<li>If [subject] [subjunctive], I would do something.' +
                '</ul>'
            ),
            'description': (
                '<ul>' +
                    '<li>' +
                        'After a verb of desiring, requesting, permitting, forbidding, etc. ' +
                        'in the main clause of the sentence, the subjunctive is used in the dependant ' +
                        'clause when the dependant clause has a different subject.' +
                    '</li>' +
                    '<li>' +
                        'After expressions of emotion, such as hoping, fearing, being glad, being sorry, etc., ' +
                        'when there is a change of subject.' +
                    '</li>' +
                    '<li>' +
                        'After verbs of doubting.' +
                    '</li>' +
                    '<li>' +
                        'After impersonal expressions such as "it is necessary" or "it is possible".' +
                    '</li>' +
                    '<li>' +
                        'After certain conjunctions, such as "antes que" or "logo que".' +
                    '</li>' +
                    '<li>' +
                        'When the if clause cannot be fulfilled.' +
                    '</li>' +
                '</ul>'
            ),
            'english': 'imperfect subjunctive',
            'requires_subject': true
        },
        'futuro do subjuntivo': {
            'name': 'futuro do subjuntivo',
             'example': (
                '<ul>' +
                    '<li>When [subject] [future subjunctive], I will do something</li>' +
                    '<li>If [subject] [future subjunctive], I will do something.</li>' +
                '</ul>'
            ),
            'description': (
                '<ul>' +
                    '<li>' +
                        'Used to express future time after certain conjunctions, such as "quando" or "depois que".' +
                    '</li>' +
                    '<li>' +
                        'When the if-clause refers to a future situation, the future subjunctive is used in the if-clause.' +
                    '</li>' +
                '</ul>'
            ),
            'english': 'future subjunctive',
            'requires_subject': true
        },
        'presente composto do subjuntivo': {
            'name': 'presente composto do subjuntivo',
            'example': 'I may have [past participle]',
            'description': '',
            'english': 'present perfect subjunctive',
            'requires_subject': true
        },
        'pretérito mais-que-perfeito do subjuntivo': {
            'name': 'pretérito mais-que-perfeito do subjuntivo',
            'example': 'If [subject] had [past perfect subjunctive], [subject] would have [past participle]',
            'description': 'When, in a "contrary to fact" if-sentence, a past situation situation is being referred to, use the past pefect subjunctive.',
            'english': 'past perfect subjunctive',
            'requires_subject': true
        }
    },
    subjects: {
        first_pers_sing: ['Eu'],
        second_pers_sing: ['Tu'],
        third_pers_sing: ['Ele', 'Ela', 'A senhora', 'O senhor', 'Você', 'A gente'],
        first_pers_plural: ['Nós'],
        third_pers_plural: ['Eles', 'Elas', 'As senhoras', 'Os senhores', 'Vocês'],
    },
    seenCalls:{},
    conjugate: function(verb, tense, subject){
        var suffix = verb.substr(verb.length - 2, 2);
        var base =  verb.substr(0, verb.length - 2);
        var verb_tense_irregularities = this.verbs[verb].irregularities[tense];

        if (verb_tense_irregularities){
            if (this.tenses[tense].requires_subject && verb_tense_irregularities[subject]){
                return verb_tense_irregularities[subject];
            } else if(!this.tenses[tense].requires_subject) {
                return verb_tense_irregularities;
            }
        }

        switch(tense){
            case 'particípio presente':
            case 'particípio pasado':
                return base + this.conjugations[suffix][tense];
            case 'progresivo presente':
                return (
                    this.conjugate('estar', 'presente do indicativo', subject) + ' ' +
                    this.conjugate(verb, 'particípio presente')
                );
            case 'presente composto do indicativo':
                return (
                    this.conjugate('ter', 'presente do indicativo', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            case 'pretérito mais-que-perfeito composto do indicativo':
                return (
                    this.conjugate('ter', 'imperfeito do indicativo', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            case 'futuro perfeito do indicativo':
                return (
                    this.conjugate('ter', 'futuro do indicativo', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            case 'presente composto do subjuntivo':
                return (
                    this.conjugate('ter', 'presente do subjuntivo', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            case 'pretérito mais-que-perfeito do subjuntivo':
                return (
                    this.conjugate('ter', 'imperfeito do subjuntivo', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            case 'condicional perfeito ou composto':
                return (
                    this.conjugate('ter', 'condicional simples', subject) + ' ' +
                    this.conjugate(verb, 'particípio pasado')
                );
            default:
                return base + this.conjugations[suffix][tense][subject];
        }
    },
    conjugations: {
        er: {
            'particípio pasado': 'ido',
            'particípio presente': 'endo',
            'presente do indicativo': {
                first_pers_sing: 'o',
                second_pers_sing: 'es',
                third_pers_sing: 'e',
                first_pers_plural: 'emos',
                third_pers_plural: 'em'
            },
            'imperfeito do indicativo': {
                first_pers_sing: 'ia',
                second_pers_sing: 'ias',
                third_pers_sing: 'ia',
                first_pers_plural: 'íamos',
                third_pers_plural: 'iam'
            },
            'pretérito perfeito do indicativo': {
                first_pers_sing: 'i',
                second_pers_sing: 'este',
                third_pers_sing: 'eu',
                first_pers_plural: 'emos',
                third_pers_plural: 'eram'
            },
            'pretérito mais-que-perfeito simples do indicativo': {
                first_pers_sing: 'era',
                second_pers_sing: 'eras',
                third_pers_sing: 'era',
                first_pers_plural: 'êramos',
                third_pers_plural: 'eram'
            },
            'futuro do indicativo': {
                first_pers_sing: 'erei',
                second_pers_sing: 'erás',
                third_pers_sing: 'erá',
                first_pers_plural: 'eremos',
                third_pers_plural: 'erão'
            },
            'presente do subjuntivo': {
                first_pers_sing: 'a',
                second_pers_sing: 'as',
                third_pers_sing: 'a',
                first_pers_plural: 'amos',
                third_pers_plural: 'am'
            },
            'imperfeito do subjuntivo': {
                first_pers_sing: 'esse',
                second_pers_sing: 'esses',
                third_pers_sing: 'esse',
                first_pers_plural: 'êssemos',
                third_pers_plural: 'essem'
            },
            'futuro do subjuntivo': {
                first_pers_sing: 'er',
                second_pers_sing: 'eres',
                third_pers_sing: 'er',
                first_pers_plural: 'ermos',
                third_pers_plural: 'erem'
            },
            'condicional simples': {
                first_pers_sing: 'eria',
                second_pers_sing: 'erias',
                third_pers_sing: 'eria',
                first_pers_plural: 'eríamos',
                third_pers_plural: 'eriam'
            }
        },
        ir: {
            'particípio pasado': 'ido',
            'particípio presente': 'indo',
            'presente do indicativo': {
                first_pers_sing: 'o',
                second_pers_sing: 'es',
                third_pers_sing: 'e',
                first_pers_plural: 'imos',
                third_pers_plural: 'em'
            },
            'imperfeito do indicativo': {
                first_pers_sing: 'ia',
                second_pers_sing: 'ias',
                third_pers_sing: 'ia',
                first_pers_plural: 'íamos',
                third_pers_plural: 'iam'
            },
            'pretérito perfeito do indicativo': {
                first_pers_sing: 'i',
                second_pers_sing: 'iste',
                third_pers_sing: 'iu',
                first_pers_plural: 'imos',
                third_pers_plural: 'iram'
            },
            'pretérito mais-que-perfeito simples do indicativo': {
                first_pers_sing: 'ira',
                second_pers_sing: 'iras',
                third_pers_sing: 'ira',
                first_pers_plural: 'íramos',
                third_pers_plural: 'iram'
            },
            'futuro do indicativo': {
                first_pers_sing: 'irei',
                second_pers_sing: 'irás',
                third_pers_sing: 'irá',
                first_pers_plural: 'iremos',
                third_pers_plural: 'irão'
            },
            'presente do subjuntivo': {
                first_pers_sing: 'a',
                second_pers_sing: 'as',
                third_pers_sing: 'a',
                first_pers_plural: 'amos',
                third_pers_plural: 'am'
            },
            'imperfeito do subjuntivo': {
                first_pers_sing: 'isse',
                second_pers_sing: 'isses',
                third_pers_sing: 'isse',
                first_pers_plural: 'íssemos',
                third_pers_plural: 'issem'
            },
            'futuro do subjuntivo': {
                first_pers_sing: 'ir',
                second_pers_sing: 'ires',
                third_pers_sing: 'ir',
                first_pers_plural: 'irmos',
                third_pers_plural: 'irem'
            },
            'condicional simples': {
                first_pers_sing: 'iria',
                second_pers_sing: 'irias',
                third_pers_sing: 'iria',
                first_pers_plural: 'iríamos',
                third_pers_plural: 'iriam'
            }
        },
        ar: {
            'particípio pasado': 'ado',
            'particípio presente': 'ando',
            'presente do indicativo': {
                first_pers_sing: 'o',
                second_pers_sing: 'as',
                third_pers_sing: 'a',
                first_pers_plural: 'amos',
                third_pers_plural: 'am'
            },
            'imperfeito do indicativo': {
                first_pers_sing: 'ava',
                second_pers_sing: 'avas',
                third_pers_sing: 'ava',
                first_pers_plural: 'ávamos',
                third_pers_plural: 'avam'
            },
            'pretérito perfeito do indicativo': {
                first_pers_sing: 'ei',
                second_pers_sing: 'aste',
                third_pers_sing: 'ou',
                first_pers_plural: 'ámos',
                third_pers_plural: 'aram'
            },
            'pretérito mais-que-perfeito simples do indicativo': {
                first_pers_sing: 'ara',
                second_pers_sing: 'aras',
                third_pers_sing: 'ara',
                first_pers_plural: 'áramos',
                third_pers_plural: 'aram'
            },
            'futuro do indicativo': {
                first_pers_sing: 'arei',
                second_pers_sing: 'arás',
                third_pers_sing: 'ará',
                first_pers_plural: 'aremos',
                third_pers_plural: 'arão'
            },
            'presente do subjuntivo': {
                first_pers_sing: 'e',
                second_pers_sing: 'es',
                third_pers_sing: 'e',
                first_pers_plural: 'emos',
                third_pers_plural: 'em'
            },
            'imperfeito do subjuntivo': {
                first_pers_sing: 'asse',
                second_pers_sing: 'asses',
                third_pers_sing: 'asse',
                first_pers_plural: 'ássemos',
                third_pers_plural: 'assem'
            },
            'futuro do subjuntivo': {
                first_pers_sing: 'ar',
                second_pers_sing: 'ares',
                third_pers_sing: 'ar',
                first_pers_plural: 'armos',
                third_pers_plural: 'arem'
            },
            'condicional simples': {
                first_pers_sing: 'aria',
                second_pers_sing: 'arias',
                third_pers_sing: 'aria',
                first_pers_plural: 'aríamos',
                third_pers_plural: 'ariam'
            }
        }
    },
    verbs: {
        abrir: {
            name: 'abrir',
            definitions: ['open'],
            irregularities: {
                'particípio pasado': 'aberto'
            }
        },
        ajudar: {
            name: 'ajudar',
            definitions: ['help', 'aid', 'assist'],
            irregularities: {}
        },
        aprender: {
            name: 'aprende',
            definitions: ['learn'],
            irregularities: {}
        },
        cear: {
            name: 'cear',
            definitions: ['eat supper'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'ceio',
                    second_pers_sing: 'ceias',
                    third_pers_sing: 'ceia',
                    third_pers_plural: 'ceiam'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'ceie',
                    second_pers_sing: 'ceies',
                    third_pers_sing: 'ceie',
                    third_pers_plural: 'ceiem'
                }
            }
        },
        chegar: {
            name: 'chegar',
            definitions: ['arrive', 'reach', 'come near (to)'],
            irregularities: {
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'cheguei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'chegue',
                    second_pers_sing: 'chegues',
                    third_pers_sing: 'chegue',
                    first_pers_plural: 'cheguemos',
                    third_pers_plural: 'cheguem'
                }
            }
        },
        cobrir: {
            name: 'cobrir',
            definitions: ['cover'],
            irregularities: {
                'particípio pasado': 'coberto',
                'presente do indicativo': {
                    first_pers_sing: 'cubro'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'cubra',
                    second_pers_sing: 'cubras',
                    third_pers_sing: 'cubra',
                    first_pers_plural: 'cubramos',
                    third_pers_plural: 'cubram'
                }
            }
        },
        começar: {
            name: 'começar',
            definitions: ['begin', 'start'],
            irregularities: {
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'comecei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'comece',
                    second_pers_sing: 'comeces',
                    third_pers_sing: 'comece',
                    first_pers_plural: 'comecemos',
                    third_pers_plural: 'comecem'
                }
            }
        },
        conduzir: {
            name: 'conduzir',
            definitions: ['drive'],
            irregularities: {
                'presente do indicativo': {
                    third_pers_sing: 'conduz'
                }
            }
        },
        conhecer: {
            name: 'conhecer',
            definitions: ['know', 'meet'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'conheço',
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'conheça',
                    second_pers_sing: 'conheças',
                    third_pers_sing: 'conheça',
                    first_pers_plural: 'conheçamos',
                    third_pers_plural: 'conheçam'
                }
            }
        },
        consumir: {
            name: 'consumi',
            definitions: ['consume'],
            irregularities: {
                'presente do indicativo': {
                    second_pers_sing: 'consomes',
                    third_pers_sing: 'consome',
                    third_pers_plural: 'consomem'
                }
            }
        },
        crer: {
            name: 'crer',
            definitions: ['believe'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'creio',
                    second_pers_sing: 'crês',
                    third_pers_sing: 'crê',
                    third_pers_plural: 'creem'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'creia',
                    second_pers_sing: 'creias',
                    third_pers_sing: 'creia',
                    first_pers_plural: 'creiamos',
                    third_pers_plural: 'creiam'
                }
            }
        },
        dar: {
            name: 'dar',
            definitions: ['give'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'dou',
                    second_pers_sing: 'dás',
                    third_pers_sing: 'dá',
                    third_pers_plural: 'dão'
                },
                'pretérito perfeito do indicativo': {
                    second_pers_sing: 'deste',
                    third_pers_sing: 'deu',
                    first_pers_plural: 'demos',
                    third_pers_plural: 'deram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'dera',
                    second_pers_sing: 'deras',
                    third_pers_sing: 'dera',
                    first_pers_plural: 'déramos',
                    third_pers_plural: 'deram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'dê',
                    second_pers_sing: 'dês',
                    third_pers_sing: 'dê',
                    first_pers_plural: 'dêmos',
                    third_pers_plural: 'deem'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'desse',
                    second_pers_sing: 'desses',
                    third_pers_sing: 'desse',
                    first_pers_plural: 'déssemos',
                    third_pers_plural: 'dessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'der',
                    second_pers_sing: 'deres',
                    third_pers_sing: 'der',
                    first_pers_plural: 'dermos',
                    third_pers_plural: 'derem'
                }
            }
        },
        despedir: {
            name: 'despedir',
            definitions: ['fire', 'dismiss'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'despeço'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'despeça',
                    second_pers_sing: 'despeças',
                    third_pers_sing: 'despeça',
                    first_pers_plural: 'despeçamos',
                    third_pers_plural: 'despeçam'
                }
            }
        },
        dizer: {
            name: 'dizer',
            definitions: ['say'],
            irregularities: {
                'particípio pasado': 'dito',
                'presente do indicativo': {
                    first_pers_sing: 'digo',
                    third_pers_sing: 'diz',
                    first_pers_plural: 'dizemos'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'disse',
                    second_pers_sing: 'disseste',
                    third_pers_sing: 'disse',
                    first_pers_plural: 'dissemos',
                    third_pers_plural: 'disseram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'dissera',
                    second_pers_sing: 'disseras',
                    third_pers_sing: 'dissera',
                    first_pers_plural: 'disséramos',
                    third_pers_plural: 'disseram'
                },
                'futuro do indicativo': {
                    first_pers_sing: 'direi',
                    second_pers_sing: 'dirás',
                    third_pers_sing: 'dirá',
                    first_pers_plural: 'diremos',
                    third_pers_plural: 'dirão'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'diga',
                    second_pers_sing: 'digas',
                    third_pers_sing: 'diga',
                    first_pers_plural: 'digamos',
                    third_pers_plural: 'digam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'dissesse',
                    second_pers_sing: 'dissesses',
                    third_pers_sing: 'dissesse',
                    first_pers_plural: 'disséssemos',
                    third_pers_plural: 'dissessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'disser',
                    second_pers_sing: 'disseres',
                    third_pers_sing: 'disser',
                    first_pers_plural: 'dissermos',
                    third_pers_plural: 'disserem'
                },
                'condicional simples': {
                    first_pers_sing: 'diria',
                    second_pers_sing: 'dirias',
                    third_pers_sing: 'diria',
                    first_pers_plural: 'diríamos',
                    third_pers_plural: 'diriam'
                }
            }
        },
        dormir: {
            name: 'dormir',
            definitions: ['sleep'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'durmo'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'durma',
                    second_pers_sing: 'durmas',
                    third_pers_sing: 'durma',
                    first_pers_plural: 'durmamos',
                    third_pers_plural: 'durmam'
                }
            }
        },
        ensinar: {
            name: 'ensinar',
            definitions: ['teach'],
            irregularities: {}
        },
        eleger: {
            name: 'eleger',
            definitions: ['elect'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'elijo'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'eleja',
                    second_pers_sing: 'elejas',
                    third_pers_sing: 'eleja',
                    first_pers_plural: 'elejamos',
                    third_pers_plural: 'elejam'
                }
            }
        },
        erguer: {
            name: 'erguer',
            definitions: ['raise', 'lift', 'erect'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'ergo'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'erga',
                    second_pers_sing: 'ergas',
                    third_pers_sing: 'erga',
                    first_pers_plural: 'ergamos',
                    third_pers_plural: 'ergam'
                }
            }
        },
        escrever: {
            name: 'escrever',
            definitions: ['write'],
            irregularities: {
                'particípio pasado': 'escrito'
            }
        },
        esquecer: {
            name: 'esquecer',
            definitions: ['forget'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'esqueço'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'esqueça',
                    second_pers_sing: 'esqueças',
                    third_pers_sing: 'esqueça',
                    first_pers_plural: 'esqueçamos',
                    third_pers_plural: 'esqueçam'
                }
            }
        },
        estar: {
            name: 'estar',
            definitions: ['be (location, temporary)'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'estou',
                    second_pers_sing: 'estás',
                    third_pers_sing: 'está',
                    third_pers_plural: 'estão'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'estive',
                    second_pers_sing: 'estiveste',
                    third_pers_sing: 'esteve',
                    first_pers_plural: 'estivemos',
                    third_pers_plural: 'estiveram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'estivera',
                    second_pers_sing: 'estiveras',
                    third_pers_sing: 'estivera',
                    first_pers_plural: 'estivéramos',
                    third_pers_plural: 'estiveram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'esteja',
                    second_pers_sing: 'estejas',
                    third_pers_sing: 'esteja',
                    first_pers_plural: 'estejamos',
                    third_pers_plural: 'estejam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'estivesse',
                    second_pers_sing: 'estivesses',
                    third_pers_sing: 'estivesse',
                    first_pers_plural: 'estivéssemos',
                    third_pers_plural: 'estivessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'estiver',
                    second_pers_sing: 'estiveres',
                    third_pers_sing: 'estiver',
                    first_pers_plural: 'estivermos',
                    third_pers_plural: 'estiverem'
                }
            }
        },
        fazer: {
            name: 'fazer',
            definitions: ['do', 'make'],
            irregularities: {
                'particípio pasado': 'feito',
                'presente do indicativo': {
                    first_pers_sing: 'faço',
                    third_pers_sing: 'faz'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'fiz',
                    second_pers_sing: 'fizeste',
                    third_pers_sing: 'fez',
                    first_pers_plural: 'fizemos',
                    third_pers_plural: 'fizeram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'fizera',
                    second_pers_sing: 'fizeras',
                    third_pers_sing: 'fizera',
                    first_pers_plural: 'fizéramos',
                    third_pers_plural: 'fizeram'
                },
                'futuro do indicativo': {
                    first_pers_sing: 'farei',
                    second_pers_sing: 'farás',
                    third_pers_sing: 'fará',
                    first_pers_plural: 'faremos',
                    third_pers_plural: 'farão'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'faça',
                    second_pers_sing: 'faças',
                    third_pers_sing: 'faça',
                    first_pers_plural: 'façamos',
                    third_pers_plural: 'façam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'fizesse',
                    second_pers_sing: 'fizesse',
                    third_pers_sing: 'fizesse',
                    first_pers_plural: 'fizéssemos',
                    third_pers_plural: 'fizesse'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'fizer',
                    second_pers_sing: 'fizeres',
                    third_pers_sing: 'fizer',
                    first_pers_plural: 'fizermos',
                    third_pers_plural: 'fizerem'
                },
                'condicional simples': {
                    first_pers_sing: 'faria',
                    second_pers_sing: 'farias',
                    third_pers_sing: 'faria',
                    first_pers_plural: 'faríamos',
                    third_pers_plural: 'fariam'
                }
            }
        },
        ficar: {
            name: 'ficar',
            definitions: ['stay', 'be'],
            irregularities: {
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'fiquei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'fique',
                    second_pers_sing: 'fiques',
                    third_pers_sing: 'fique',
                    first_pers_plural: 'fiquemos',
                    third_pers_plural: 'fiquem'
                }
            }
        },
        fugir: {
            name: 'fugir',
            definitions: ['flee', 'run away', 'escape'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'fujo',
                    second_pers_sing: 'foges',
                    third_pers_sing: 'foge',
                    third_pers_plural: 'fogem'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'fuja',
                    second_pers_sing: 'fujas',
                    third_pers_sing: 'fuja',
                    first_pers_plural: 'fujamos',
                    third_pers_plural: 'fujam'
                }
            }
        },
        ganhar: {
            name: 'ganhar',
            definitions: ['win', 'gain', 'earn', 'make'],
            irregularities: {
                'particípio pasado': 'ganho'
            }
        },
        gastar: {
            name: 'gastar',
            definitions: ['spend', 'expend', 'waste'],
            irregularities: {
                'particípio pasado': 'gasto'
            }
        },
        gostar: {
            name: 'gostar',
            definitions: ['like'],
            irregularities: {}
        },
        haver: {
            name: 'haver',
            definitions: ['be (impersonal)', 'have (auxiliary)'],
            irregularities: {
                'presente do indicativo': {
                   first_pers_sing: 'hei',
                    second_pers_sing: 'hás',
                    third_pers_sing: 'há',
                    first_pers_plural: 'hemos',
                    third_pers_plural: 'hão'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'houve',
                    second_pers_sing: 'houveste',
                    third_pers_sing: 'houve',
                    first_pers_plural: 'houvemos',
                    third_pers_plural: 'houveram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'houvera',
                    second_pers_sing: 'houveras',
                    third_pers_sing: 'houvera',
                    first_pers_plural: 'houvéramos',
                    third_pers_plural: 'houveram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'haja',
                    second_pers_sing: 'hajas',
                    third_pers_sing: 'haja',
                    first_pers_plural: 'hajamos',
                    third_pers_plural: 'hajam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'houvesse',
                    second_pers_sing: 'houvesses',
                    third_pers_sing: 'houvesse',
                    first_pers_plural: 'houvéssemos',
                    third_pers_plural: 'houvessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'houver',
                    second_pers_sing: 'houveres',
                    third_pers_sing: 'houver',
                    first_pers_plural: 'houvermos',
                    third_pers_plural: 'houverem'
                }
            }
        },
        ir: {
            name: 'ir',
            definitions: ['go'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'vou',
                    second_pers_sing: 'vais',
                    third_pers_sing: 'vai',
                    first_pers_plural: 'vamos',
                    third_pers_plural: 'vão'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'fui',
                    second_pers_sing: 'foste',
                    third_pers_sing: 'foi',
                    first_pers_plural: 'fomos',
                    third_pers_plural: 'foram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'fora',
                    second_pers_sing: 'foras',
                    third_pers_sing: 'fora',
                    first_pers_plural: 'fôramos',
                    third_pers_plural: 'foram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'vá',
                    second_pers_sing: 'vás',
                    third_pers_sing: 'vá',
                    first_pers_plural: 'vamos',
                    third_pers_plural: 'vão'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'fosse',
                    second_pers_sing: 'fosses',
                    third_pers_sing: 'fosse',
                    first_pers_plural: 'fôssemos',
                    third_pers_plural: 'fossem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'for',
                    second_pers_sing: 'fores',
                    third_pers_sing: 'for',
                    first_pers_plural: 'formos',
                    third_pers_plural: 'forem'
                }
            }
        },
        marcar: {
            name: 'marcar',
            definitions: ['mark', 'dial', 'brand', 'schedule'],
            irregularities: {
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'marquei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'marque',
                    second_pers_sing: 'marques',
                    third_pers_sing: 'marque',
                    first_pers_plural: 'marquemos',
                    third_pers_plural: 'marquem'
                }
            }
        },
        medir: {
            name: 'medir',
            definitions: ['measure'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'meço'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'meça',
                    second_pers_sing: 'meças',
                    third_pers_sing: 'meça',
                    first_pers_plural: 'meçamos',
                    third_pers_plural: 'meçam'
                }
            }
        },
        mentir: {
            name: 'mentir',
            definitions: ['lie'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'minto'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'minta',
                    second_pers_sing: 'mintas',
                    third_pers_sing: 'minta',
                    first_pers_plural: 'mintamos',
                    third_pers_plural: 'mintam'
                }
            }
        },
        ouvir: {
            name: 'ouvir',
            definitions: ['hear'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'ouço'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'ouça',
                    second_pers_sing: 'ouças',
                    third_pers_sing: 'ouça',
                    first_pers_plural: 'ouçamos',
                    third_pers_plural: 'ouçam'
                }
            }
        },
        pagar: {
            name: 'pagar',
            definitions: ['pay'],
            irregularities: {
                'particípio pasado': 'pago',
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'paguei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'pague',
                    second_pers_sing: 'pagues',
                    third_pers_sing: 'pague',
                    first_pers_plural: 'paguemos',
                    third_pers_plural: 'paguem'
                }
            }
        },
        pegar: {
            name: 'pegar',
            definitions: ['catch', 'pick up'],
            irregularities: {
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'peguei'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'pegue',
                    second_pers_sing: 'pegues',
                    third_pers_sing: 'pegue',
                    first_pers_plural: 'peguemos',
                    third_pers_plural: 'peguem'
                }
            }
        },
        pedir: {
            name: 'pedir',
            definitions: ['ask for', 'order', 'request'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'peço'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'peça',
                    second_pers_sing: 'peças',
                    third_pers_sing: 'peça',
                    first_pers_plural: 'peçamos',
                    third_pers_plural: 'peçam'
                }
            }
        },
        perder: {
            name: 'perder',
            definitions: ['lose', 'miss'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'perco'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'perca',
                    second_pers_sing: 'percas',
                    third_pers_sing: 'perca',
                    first_pers_plural: 'percamos',
                    third_pers_plural: 'percam'
                }
            }
        },
        poder: {
            name: 'poder',
            definitions: ['be able to'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'posso'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'pude',
                    second_pers_sing: 'pudeste',
                    third_pers_sing: 'pôde',
                    first_pers_plural: 'pudemos',
                    third_pers_plural: 'puderam'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'pudera',
                    second_pers_sing: 'puderas',
                    third_pers_sing: 'pudera',
                    first_pers_plural: 'pudéramos',
                    third_pers_plural: 'puderam'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'possa',
                    second_pers_sing: 'possas',
                    third_pers_sing: 'possa',
                    first_pers_plural: 'possamos',
                    third_pers_plural: 'possam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'pudesse',
                    second_pers_sing: 'pudesses',
                    third_pers_sing: 'pudesse',
                    first_pers_plural: 'pudéssemos',
                    third_pers_plural: 'pudessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'puder',
                    second_pers_sing: 'puderes',
                    third_pers_sing: 'puder',
                    first_pers_plural: 'pudermos',
                    third_pers_plural: 'puderem'
                }
            }
        },
        pôr: {
            name: 'pôr',
            definitions: ['put'],
            irregularities: {
                'particípio presente': 'pondo',
                'particípio pasado': 'posto',
                'presente do indicativo': {
                    first_pers_sing: 'ponho',
                    second_pers_sing: 'pões',
                    third_pers_sing: 'põe',
                    first_pers_plural: 'pomos',
                    third_pers_plural: 'põem'
                },
                'imperfeito do indicativo': {
                    first_pers_sing: 'punha',
                    second_pers_sing: 'punhas',
                    third_pers_sing: 'punha',
                    first_pers_plural: 'púnhamos',
                    third_pers_plural: 'punham'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'pus',
                    second_pers_sing: 'puseste',
                    third_pers_sing: 'pôs',
                    first_pers_plural: 'pusemos',
                    third_pers_plural: 'puseram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'pusera',
                    second_pers_sing: 'puseras',
                    third_pers_sing: 'pusera',
                    first_pers_plural: 'puséramos',
                    third_pers_plural: 'puseram'
                },
                'futuro do indicativo': {
                    first_pers_sing: 'porei',
                    second_pers_sing: 'porás',
                    third_pers_sing: 'porá',
                    first_pers_plural: 'poremos',
                    third_pers_plural: 'porão'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'ponha',
                    second_pers_sing: 'ponhas',
                    third_pers_sing: 'ponha',
                    first_pers_plural: 'ponhamos',
                    third_pers_plural: 'ponham'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'pusesse',
                    second_pers_sing: 'pusesses',
                    third_pers_sing: 'pusesse',
                    first_pers_plural: 'puséssemos',
                    third_pers_plural: 'pusessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'puser',
                    second_pers_sing: 'puseres',
                    third_pers_sing: 'puser',
                    first_pers_plural: 'pusermos',
                    third_pers_plural: 'puserem'
                },
                'condicional simples': {
                    first_pers_sing: 'poria',
                    second_pers_sing: 'porias',
                    third_pers_sing: 'poria',
                    first_pers_plural: 'poríamos',
                    third_pers_plural: 'poriam'
                }
            }
        },
        preferir: {
            name: 'preferir',
            definitions: ['prefer'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'prefiro'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'prefira',
                    second_pers_sing: 'prefiras',
                    third_pers_sing: 'prefira',
                    first_pers_plural: 'prefiramos',
                    third_pers_plural: 'prefiram'
                }
            }
        },
        produzir: {
            name: 'produzir',
            definitions: ['produce'],
            irregularities: {
                'presente do indicativo': {
                    third_pers_sing: 'produz'
                }
            }
        },
        querer: {
            name: 'querer',
            definitions: ['want'],
            irregularities: {
                'presente do indicativo': {
                    third_pers_sing: 'quer'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'quis',
                    second_pers_sing: 'quiseste',
                    third_pers_sing: 'quis',
                    first_pers_plural: 'quisemos',
                    third_pers_plural: 'quiseram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'quisera',
                    second_pers_sing: 'quiseras',
                    third_pers_sing: 'quisera',
                    first_pers_plural: 'quiséramos',
                    third_pers_plural: 'quiseram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'queira',
                    second_pers_sing: 'queiras',
                    third_pers_sing: 'queira',
                    first_pers_plural: 'queiramos',
                    third_pers_plural: 'queiram'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'quisesse',
                    second_pers_sing: 'quisesses',
                    third_pers_sing: 'quisesse',
                    first_pers_plural: 'quiséssemos',
                    third_pers_plural: 'quisessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'quiser',
                    second_pers_sing: 'quiseres',
                    third_pers_sing: 'quiser',
                    first_pers_plural: 'quisermos',
                    third_pers_plural: 'quiserem'
                }
            }
        },
        recear: {
            name: 'recear',
            definitions: ['fear'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'receio',
                    second_pers_sing: 'receias',
                    third_pers_sing: 'receia',
                    third_pers_plural: 'receiam'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'receie',
                    second_pers_sing: 'receies',
                    third_pers_sing: 'receie',
                    third_pers_plural: 'receiem'
                }
            }
        },
        repetir: {
            name: 'repetir',
            definitions: ['repeat'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'repito'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'repita',
                    second_pers_sing: 'repitas',
                    third_pers_sing: 'repita',
                    first_pers_plural: 'repitamos',
                    third_pers_plural: 'repitam'
                }
            }
        },
        rir: {
            name: 'rir',
            definitions: ['laugh'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'rio',
                    second_pers_sing: 'ris',
                    third_pers_sing: 'ri',
                    third_pers_plural: 'riem'
                }
            }
        },
        saber: {
            name: 'saber',
            definitions: ['know of'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'sei'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'soube',
                    second_pers_sing: 'soubeste',
                    third_pers_sing: 'soube',
                    first_pers_plural: 'soubemos',
                    third_pers_plural: 'souberam'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'soubera',
                    second_pers_sing: 'souberas',
                    third_pers_sing: 'soubera',
                    first_pers_plural: 'soubéramos',
                    third_pers_plural: 'souberam'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'saiba',
                    second_pers_sing: 'saibas',
                    third_pers_sing: 'saiba',
                    first_pers_plural: 'saibamos',
                    third_pers_plural: 'saibam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'soubesse',
                    second_pers_sing: 'soubesses',
                    third_pers_sing: 'soubesse',
                    first_pers_plural: 'soubéssemos',
                    third_pers_plural: 'soubessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'souber',
                    second_pers_sing: 'souberes',
                    third_pers_sing: 'souber',
                    first_pers_plural: 'soubermos',
                    third_pers_plural: 'souberem'
                }
            }
        },
        sacudir: {
            name: 'sacudir',
            definitions: ['shake', 'shake off'],
            irregularities: {
                'presente do indicativo': {
                    second_pers_sing: 'sacodes',
                    third_pers_sing: 'sacode',
                    third_pers_plural: 'sacodem'
                }
            }
        },
        seguir: {
            name: 'seguir',
            definitions: ['follow'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'sigo',
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'siga',
                    second_pers_sing: 'sigas',
                    third_pers_sing: 'siga',
                    first_pers_plural: 'sigamos',
                    third_pers_plural: 'sigam'
                }
            }
        },
        sentir: {
            name: 'sentir',
            definitions: ['feel'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'sinto'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'sinta',
                    second_pers_sing: 'sintas',
                    third_pers_sing: 'sinta',
                    first_pers_plural: 'sintamos',
                    third_pers_plural: 'sintam'
                }
            }
        },
        servir: {
            name: 'servir',
            definitions: ['serve'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'sirvo',
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'sirva',
                    second_pers_sing: 'sirvas',
                    third_pers_sing: 'sirva',
                    first_pers_plural: 'sirvamos',
                    third_pers_plural: 'sirvam'
                }
            }
        },
        ser: {
            name: 'ser',
            definitions: ['be (permanent)'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'sou',
                    second_pers_sing: 'és',
                    third_pers_sing: 'é',
                    first_pers_plural: 'somos',
                    third_pers_plural: 'são'
                },
                'imperfeito do indicativo': {
                    first_pers_sing: 'era',
                    second_pers_sing: 'eras',
                    third_pers_sing: 'era',
                    first_pers_plural: 'éramos',
                    third_pers_plural: 'eram'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'fui',
                    second_pers_sing: 'foste',
                    third_pers_sing: 'foi',
                    first_pers_plural: 'fomos',
                    third_pers_plural: 'foram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'fora',
                    second_pers_sing: 'foras',
                    third_pers_sing: 'fora',
                    first_pers_plural: 'fôramos',
                    third_pers_plural: 'foram'
                },
                'futuro do indicativo': {
                    first_pers_sing: '',
                    second_pers_sing: '',
                    third_pers_sing: '',
                    first_pers_plural: '',
                    third_pers_plural: ''
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'seja',
                    second_pers_sing: 'sejas',
                    third_pers_sing: 'seja',
                    first_pers_plural: 'sejamos',
                    third_pers_plural: 'sejam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'fosse',
                    second_pers_sing: 'fosses',
                    third_pers_sing: 'fosse',
                    first_pers_plural: 'fôssemos',
                    third_pers_plural: 'fossem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'for',
                    second_pers_sing: 'fores',
                    third_pers_sing: 'for',
                    first_pers_plural: 'formos',
                    third_pers_plural: 'forem'
                }
            }
        },
        subir: {
            name: 'subir',
            definitions: ['climb', 'rise', 'go up'],
            irregularities: {
                'presente do indicativo': {
                    second_pers_sing: 'sobes',
                    third_pers_sing: 'sobe',
                    third_pers_plural: 'sobem'
                }
            }
        },
        sumir: {
            name: 'sumir',
            definitions: ['disappear', 'vanish'],
            irregularities: {
                'presente do indicativo': {
                    second_pers_sing: 'somes',
                    third_pers_sing: 'some',
                    third_pers_plural: 'somem'
                }
            }
        },
        ter: {
            name: 'ter',
            definitions: ['have'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'tenho',
                    second_pers_sing: 'tens',
                    third_pers_sing: 'tem',
                    first_pers_plural: 'temos',
                    third_pers_plural: 'têm'
                },
                'imperfeito do indicativo': {
                    first_pers_sing: 'tinha',
                    second_pers_sing: 'tinhas',
                    third_pers_sing: 'tinha',
                    first_pers_plural: 'tínhamos',
                    third_pers_plural: 'tinham'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'tive',
                    second_pers_sing: 'tiveste',
                    third_pers_sing: 'teve',
                    first_pers_plural: 'tivemos',
                    third_pers_plural: 'tiveram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'tivera',
                    second_pers_sing: 'tiveras',
                    third_pers_sing: 'tivera',
                    first_pers_plural: 'tivéramos',
                    third_pers_plural: 'tiveram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'tenha',
                    second_pers_sing: 'tenhas',
                    third_pers_sing: 'tenha',
                    first_pers_plural: 'tenhamos',
                    third_pers_plural: 'tenham'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'tivesse',
                    second_pers_sing: 'tivesses',
                    third_pers_sing: 'tivesse',
                    first_pers_plural: 'tivéssemos',
                    third_pers_plural: 'tivessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'tiver',
                    second_pers_sing: 'tiveres',
                    third_pers_sing: 'tiver',
                    first_pers_plural: 'tivermos',
                    third_pers_plural: 'tiverem'
                }
            }
        },
        trazer: {
            name: 'trazer',
            definitions: ['bring'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'trago',
                    third_pers_sing: 'traz'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'trouxe',
                    second_pers_sing: 'trouxeste',
                    third_pers_sing: 'trouxe',
                    first_pers_plural: 'trouxemos',
                    third_pers_plural: 'trouxeram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'trouxera',
                    second_pers_sing: 'trouxeras',
                    third_pers_sing: 'trouxera',
                    first_pers_plural: 'trouxéramos',
                    third_pers_plural: 'trouxeram'
                },
                'futuro do indicativo': {
                    first_pers_sing: 'trarei',
                    second_pers_sing: 'trarás',
                    third_pers_sing: 'trará',
                    first_pers_plural: 'traremos',
                    third_pers_plural: 'trarão'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'traga',
                    second_pers_sing: 'tragas',
                    third_pers_sing: 'traga',
                    first_pers_plural: 'tragamos',
                    third_pers_plural: 'tragam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'trouxesse',
                    second_pers_sing: 'trouxesses',
                    third_pers_sing: 'trouxesse',
                    first_pers_plural: 'trouxéssemos',
                    third_pers_plural: 'trouxesse'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'trouxer',
                    second_pers_sing: 'trouxeres',
                    third_pers_sing: 'trouxer',
                    first_pers_plural: 'trouxermos',
                    third_pers_plural: 'trouxerem'
                },
                'condicional simples': {
                    first_pers_sing: 'traria',
                    second_pers_sing: 'trarias',
                    third_pers_sing: 'traria',
                    first_pers_plural: 'traríamos',
                    third_pers_plural: 'trariam'
                }
            }
        },
        valer: {
            name: 'valer',
            definitions: ['value'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'valho'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'valha',
                    second_pers_sing: 'valhas',
                    third_pers_sing: 'valha',
                    first_pers_plural: 'valhamos',
                    third_pers_plural: 'valham'
                }
            }
        },
        ver: {
            name: 'ver',
            definitions: ['see'],
            irregularities: {
                'particípio pasado': 'visto',
                'presente do indicativo': {
                    first_pers_sing: 'vejo',
                    second_pers_sing: 'vês',
                    third_pers_sing: 'vê',
                    third_pers_plural: 'veem'
                },
                'pretérito perfeito do indicativo': {
                    second_pers_sing: 'viste',
                    third_pers_sing: 'viu',
                    first_pers_plural: 'vimos',
                    third_pers_plural: 'viram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'vira',
                    second_pers_sing: 'viras',
                    third_pers_sing: 'vira',
                    first_pers_plural: 'víramos',
                    third_pers_plural: 'viram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'veja',
                    second_pers_sing: 'vejas',
                    third_pers_sing: 'veja',
                    first_pers_plural: 'vejamos',
                    third_pers_plural: 'vejam'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'visse',
                    second_pers_sing: 'visses',
                    third_pers_sing: 'visse',
                    first_pers_plural: 'víssemos',
                    third_pers_plural: 'visse'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'vir',
                    second_pers_sing: 'vires',
                    third_pers_sing: 'vir',
                    first_pers_plural: 'virmos',
                    third_pers_plural: 'virem'
                },
            }
        },
        vestir: {
            name: 'vestir',
            definitions: ['wear'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'visto'

                },
                'presente do subjuntivo': {
                    first_pers_sing: 'vista',
                    second_pers_sing: 'vistas',
                    third_pers_sing: 'vista',
                    first_pers_plural: 'vistamos',
                    third_pers_plural: 'vistam'
                }
            }
        },
        vir: {
            name: 'vir',
            definitions: ['come'],
            irregularities: {
                'presente do indicativo': {
                    first_pers_sing: 'venho',
                    second_pers_sing: 'vens',
                    third_pers_sing: 'vem',
                    third_pers_plural: 'vêm'
                },
                'imperfeito do indicativo': {
                    first_pers_sing: 'vinha',
                    second_pers_sing: 'vinhas',
                    third_pers_sing: 'vinha',
                    first_pers_plural: 'vinhamos',
                    third_pers_plural: 'vinham'
                },
                'pretérito perfeito do indicativo': {
                    first_pers_sing: 'vim',
                    second_pers_sing: 'vieste',
                    third_pers_sing: 'veio',
                    first_pers_plural: 'viemos',
                    third_pers_plural: 'vieram'
                },
                'pretérito mais-que-perfeito simples do indicativo': {
                    first_pers_sing: 'viera',
                    second_pers_sing: 'vieras',
                    third_pers_sing: 'viera',
                    first_pers_plural: 'viéramos',
                    third_pers_plural: 'vieram'
                },
                'presente do subjuntivo': {
                    first_pers_sing: 'venha',
                    second_pers_sing: 'venhas',
                    third_pers_sing: 'venha',
                    first_pers_plural: 'venhamos',
                    third_pers_plural: 'venham'
                },
                'imperfeito do subjuntivo': {
                    first_pers_sing: 'viesse',
                    second_pers_sing: 'viesses    ',
                    third_pers_sing: 'viesse',
                    first_pers_plural: 'viéssemos',
                    third_pers_plural: 'viessem'
                },
                'futuro do subjuntivo': {
                    first_pers_sing: 'vier',
                    second_pers_sing: 'vieres',
                    third_pers_sing: 'vier',
                    first_pers_plural: 'viermos',
                    third_pers_plural: 'vierem'
                }
            }
        }
    }
};