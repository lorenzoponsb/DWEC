$(document).ready(function () {

  var datos = [
    {
      "id": 36,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 58,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 40,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 41,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 60,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-02-02 19:00",
      "endDate": "2016-02-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 66,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 67,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 68,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 69,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 70,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 71,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 72,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 73,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 74,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 75,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 76,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 78,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 80,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-10 07:01",
      "endDate": "2016-02-10 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 81,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 82,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-08 07:01",
      "endDate": "2016-02-08 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 83,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-02 07:01",
      "endDate": "2016-02-02 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 84,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-09 07:01",
      "endDate": "2016-02-09 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 85,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-18 07:01",
      "endDate": "2016-02-18 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 87,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 90,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 93,
      "name": "Micro 3",
      "description": "Evento de prueba",
      "startDate": "2016-03-02 19:00",
      "endDate": "2016-03-09 19:00",
      "eventType": {
        "itemValue": "GENERIC",
        "itemLabel": "generic"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 91,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    },
    {
      "id": 89,
      "name": "Nuevo evento",
      "description": "Descripcion del Evento",
      "startDate": "2016-02-22 07:01",
      "endDate": "2016-02-22 07:01",
      "eventType": {
        "itemValue": "MICROCICLE",
        "itemLabel": "microcicle"
      },
      "status": {
        "itemValue": "NOT_DEFINED",
        "itemLabel": "not defined"
      },
      "eventGroup": {
        "id": 31,
        "name": "Evento 1",
        "description": "Evento de prueba",
        "additionalInfo": null
      },
      "configuration": {
        "data": [
          {
            "conceptType": {
              "itemValue": "INTENSITY",
              "itemLabel": "intensity"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": {
              "itemValue": "VOLUME",
              "itemLabel": "volume"
            },
            "value": 8,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      },
      "content": {
        "data": [
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          },
          {
            "conceptType": null,
            "value": null,
            "label": "Prueba",
            "note": "Loren ipsum"
          }
        ]
      }
    }
  ];


  function getLocaleFormat(date) {
    return moment(date).locale(window.navigator.language).format('L');
  }

  function getRandomColor() {
    return "#" + ((1 << 24) * Math.random() | 0).toString(16);
  }

  function generador(newData) {
    var myData = {
      "columns": [{"data": "itemLabel", "title": "micro"}],
      "data": []
    };
    var data = {};

    $.each(newData, function (key, value) {
      myData.columns.push({
        "data": value.id, "title": value.id.toString(), render: function (data, type, row, meta) {
          return '<input data-myItemValue="' + row.DT_RowId + '" data-myColId="' + meta.settings.aoColumns[meta.col].data + '" value="' + data + '" type="number" step="1" />';
        }
      });

      $.each(value.configuration.data, function (key1, value1) {
        var itemValue = value1.conceptType.itemValue;
        (!data[itemValue]) ?
          data[itemValue] = {} : null;
        data[itemValue][value.id] = value1.value;
        data[itemValue].itemLabel = value1.conceptType.itemLabel;
        data[itemValue].DT_RowId = itemValue;
      })
    });

    $.each(data, function (key, value) {
      myData.data.push(value)
    });

    return myData;
  }

  function getDataTableData(){
    var newData = datos;
    var myData = [];
    var data = {};

    $.each(newData, function (key, value) {
      $.each(value.content.data, function (key1, value1) {
        var itemValue = value1.conceptType.itemValue;
        (!data[itemValue]) ?
          data[itemValue] = {} : null;
        data[itemValue][value.id] = value1.value;
        data[itemValue].itemLabel = value1.conceptType.itemLabel;
        data[itemValue].DT_RowId = itemValue;
      })
    });

    $.each(data, function (key, value) {
      myData.push(value)
    });

    return myData;
  }

  function getAmChartsDataProvider() {
    var amChartsData = [];

    $.each(datos, function (key, micro) {
      var contentData = {
        "date": getLocaleFormat(micro.startDate),
        "id": micro.id
      };
      $.each(micro.content.data, function (key1, content) {
        contentData[content.conceptType.itemValue] = content.value;
      });
      amChartsData.push(contentData);
    });

    return amChartsData;
  };

  function getAmChartsData() {

    var amChartsData = [];
    var parameters = {};
    var dataGraph = {
      "dataProvider": [],
      "graphs": [],
      "categoryField": "date"
    };

    $.each(datos, function (key, micro) {
      var contentData = {
        "date": getLocaleFormat(micro.startDate),
        "id": micro.id
      };
      $.each(micro.configuration.data, function (key1, content) {
        contentData[content.conceptType.itemValue] = content.value;
        parameters[content.conceptType.itemValue] = content.conceptType.itemLabel;
      });
      amChartsData.push(contentData);
    });

    $.each(parameters, function (value, label) {
      dataGraph.graphs.push({
        "lineColor": getRandomColor(),
        "bullet": "round",
        "title": label,
        "valueField": value,
        "type": "column"
      });
    });


    dataGraph.dataProvider = amChartsData;
    return dataGraph;
  }


  var chartOptions = getAmChartsData();


  var dataTabla = [
    [{
      value: 5,
      itemLabel: "12/05/2016"
    }, {
      value: 6,
      itemLabel: "12/05/2016"
    }, {
      value: 7,
      itemLabel: "12/05/2016"
    }, {
      value: 8,
      itemLabel: "12/05/2016"
    }, {
      value: 9,
      itemLabel: "12/05/2016"
    }, {
      value: 10,
      itemLabel: "12/05/2016"
    }, {
      value: 11,
      itemLabel: "12/05/2016"
    }, {
      value: 12,
      itemLabel: "12/05/2016"
    }],
    [{
      micropos: 5,
      value: 100,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 6,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 7,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 8,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 9,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 10,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 11,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }, {
      micropos: 12,
      value: 8,
      itemValue: "INTENSITY",
      itemLabel: "intensity"
    }],
    [{
      micropos: 5,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 6,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 7,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 8,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 9,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 10,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 11,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }, {
      micropos: 12,
      value: 8,
      itemValue: "VOLUME",
      itemLabel: "volume"
    }],
    []

  ];




 // var table = $('#table').DataTable(generador(datos));
  //var chart = AmCharts.makeChart("am-graph", chartOptions);


  // {setAutoOffsets:false}

 // console.log(getAmChartsData());

  var tabla = new $.dwecProject.liveTable($('#liveTable'), dataTabla,{});
  var grafica = new  $.dwecProject.draggableChart($('#am-graph'),chartOptions,{});

 // var grafica = $('#am-graph').dwecProjectDraggableChart(chartOptions, {});

 /* console.log("INICIA!!!");
 console.log(grafica.data());
 console.log($('#am-graph').getCoachGate_Chart());
  console.log($.dwecProject);
  console.log(grafica);
  console.log(tabla);
  console.log(JSON.stringify(dataTabla));
*/

  $('#btnOn').click(function(){
    grafica.options.draggable = true;
  });
  $('#btnOff').click(function(){
    grafica.options.draggable = false;
  });

  $('#liveTable').on("LiveTableRefresh",function(event){
    console.log(event);
  });

  $('#am-graph').on("DraggableChartRefresh",function(event){
    console.log(event);
  });
  console.log($('#am-graph').getDwecProject_draggableChart());






});

