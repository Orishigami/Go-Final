// models/Student.go
package models

import (
	"time"

	"gorm.io/gorm"
)

type Teacher struct {
	gorm.Model //grom จะสร้าง ID, CreatedAt, Description....
	FirstName  string
	LastName   string
	sex        string `gorm:"size:10"`
	Age        int
	bod        time.Time `gorm:"type:date"` // กำหนดชนิดข้อมูลเป็น date
}
